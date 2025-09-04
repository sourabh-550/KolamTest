import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, FileText, FileSpreadsheet, Loader2 } from "lucide-react";

interface ExportPanelProps {
  data: {
    wordCloud: Array<{ text: string; value: number }>;
    totalWords: number;
    uniqueWords: number;
    topThemes: Array<{ text: string; value: number }>;
    inputText: string;
    comments?: Array<{
      id: string;
      text: string;
      sentiment: 'positive' | 'negative' | 'neutral';
      confidence: number;
      themes: string[];
    }>;
    summary?: {
      totalComments: number;
      positiveCount: number;
      negativeCount: number;
      neutralCount: number;
      keyInsights: string[];
      mainConcerns: string[];
      supportedAspects: string[];
    };
  };
}

export default function ExportPanel({ data }: ExportPanelProps) {
  const [isExporting, setIsExporting] = useState<string | null>(null);

  const exportToCSV = async () => {
    setIsExporting('csv');

    let csvContent = "";

    // If we have individual comments with sentiment analysis
    if (data.comments && data.comments.length > 0) {
      const csvHeader = "Comment_ID,Comment_Text,Sentiment,Confidence,Key_Themes\n";
      const commentsContent = data.comments.map(comment => {
        const cleanText = comment.text.replace(/"/g, '""'); // Escape quotes
        const themes = comment.themes.join('; ');
        return `"${comment.id}","${cleanText}","${comment.sentiment}",${(comment.confidence * 100).toFixed(1)}%,"${themes}"`;
      }).join('\n');

      // Add word frequency section
      const wordHeader = "\n\nWord,Frequency,Percentage\n";
      const totalOccurrences = data.wordCloud.reduce((sum, item) => sum + item.value, 0);
      const wordContent = data.wordCloud.map(item => {
        const percentage = ((item.value / totalOccurrences) * 100).toFixed(2);
        return `"${item.text}",${item.value},${percentage}%`;
      }).join('\n');

      csvContent = csvHeader + commentsContent + wordHeader + wordContent;
    } else {
      // Fallback to original word cloud format
      const csvHeader = "Word,Frequency,Percentage\n";
      const totalOccurrences = data.wordCloud.reduce((sum, item) => sum + item.value, 0);
      csvContent = csvHeader + data.wordCloud.map(item => {
        const percentage = ((item.value / totalOccurrences) * 100).toFixed(2);
        return `"${item.text}",${item.value},${percentage}%`;
      }).join('\n');
    }

    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `policy-insights-analysis-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsExporting(null), 1000);
  };

  const exportToPDF = async () => {
    setIsExporting('pdf');

    // Create comprehensive HTML report
    const reportHTML = `
<!DOCTYPE html>
<html>
<head>
    <title>Policy Insights - Legislative Feedback Analysis Report</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #334155; line-height: 1.6; }
        .header { border-bottom: 2px solid #2563eb; padding-bottom: 20px; margin-bottom: 30px; }
        .title { color: #1e293b; font-size: 24px; font-weight: bold; margin: 0; }
        .subtitle { color: #64748b; font-size: 14px; margin: 5px 0 0 0; }
        .section { margin: 30px 0; page-break-inside: avoid; }
        .section-title { color: #1e293b; font-size: 18px; font-weight: bold; margin-bottom: 15px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0; }
        .stat-card { border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; text-align: center; }
        .stat-number { font-size: 28px; font-weight: bold; color: #2563eb; }
        .stat-label { color: #64748b; font-size: 12px; margin-top: 5px; }
        .sentiment-positive { color: #16a34a; font-weight: bold; }
        .sentiment-negative { color: #dc2626; font-weight: bold; }
        .sentiment-neutral { color: #6b7280; font-weight: bold; }
        .word-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 8px; }
        .word-item { display: flex; justify-content: space-between; padding: 8px; background: #f8fafc; border-radius: 4px; }
        .insights-list { list-style: none; padding: 0; }
        .insights-list li { padding: 10px; background: #f1f5f9; border-left: 4px solid #2563eb; margin: 8px 0; }
        .concerns-list { list-style: none; padding: 0; }
        .concerns-list li { padding: 8px; background: #fef2f2; border-left: 4px solid #dc2626; margin: 5px 0; }
        .support-list { list-style: none; padding: 0; }
        .support-list li { padding: 8px; background: #f0fdf4; border-left: 4px solid #16a34a; margin: 5px 0; }
        .comments-table { width: 100%; border-collapse: collapse; margin: 20px 0; }
        .comments-table th, .comments-table td { border: 1px solid #e2e8f0; padding: 8px; text-align: left; }
        .comments-table th { background: #f8fafc; font-weight: bold; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; }
    </style>
</head>
<body>
    <div class="header">
        <h1 class="title">Policy Insights - Legislative Feedback Analysis Report</h1>
        <p class="subtitle">Generated on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
    </div>

    ${data.summary ? `
    <div class="section">
        <h2 class="section-title">Executive Summary</h2>
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-number">${data.summary.totalComments}</div>
                <div class="stat-label">Total Comments</div>
            </div>
            <div class="stat-card">
                <div class="stat-number sentiment-positive">${Math.round((data.summary.positiveCount / data.summary.totalComments) * 100)}%</div>
                <div class="stat-label">Positive Sentiment</div>
            </div>
            <div class="stat-card">
                <div class="stat-number sentiment-negative">${Math.round((data.summary.negativeCount / data.summary.totalComments) * 100)}%</div>
                <div class="stat-label">Negative Sentiment</div>
            </div>
            <div class="stat-card">
                <div class="stat-number sentiment-neutral">${Math.round((data.summary.neutralCount / data.summary.totalComments) * 100)}%</div>
                <div class="stat-label">Neutral Sentiment</div>
            </div>
        </div>
    </div>

    <div class="section">
        <h2 class="section-title">Key Insights & Recommendations</h2>
        <ul class="insights-list">
            ${data.summary.keyInsights.map(insight => `<li>${insight}</li>`).join('')}
        </ul>
    </div>

    ${data.summary.supportedAspects.length > 0 ? `
    <div class="section">
        <h2 class="section-title">Supported Aspects</h2>
        <ul class="support-list">
            ${data.summary.supportedAspects.map(aspect => `<li>${aspect}</li>`).join('')}
        </ul>
    </div>
    ` : ''}

    ${data.summary.mainConcerns.length > 0 ? `
    <div class="section">
        <h2 class="section-title">Main Concerns</h2>
        <ul class="concerns-list">
            ${data.summary.mainConcerns.map(concern => `<li>${concern}</li>`).join('')}
        </ul>
    </div>
    ` : ''}
    ` : ''}

    <div class="section">
        <h2 class="section-title">Word Frequency Analysis</h2>
        <div class="word-list">
            ${data.wordCloud.slice(0, 20).map(item => `
                <div class="word-item">
                    <span style="font-weight: 600; text-transform: capitalize;">${item.text}</span>
                    <span style="color: #2563eb; font-weight: 600;">${item.value}</span>
                </div>
            `).join('')}
        </div>
    </div>

    ${data.comments && data.comments.length > 0 ? `
    <div class="section">
        <h2 class="section-title">Individual Comment Analysis</h2>
        <table class="comments-table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Comment</th>
                    <th>Sentiment</th>
                    <th>Confidence</th>
                    <th>Key Themes</th>
                </tr>
            </thead>
            <tbody>
                ${data.comments.slice(0, 10).map((comment, index) => `
                    <tr>
                        <td>#${index + 1}</td>
                        <td>${comment.text.length > 100 ? comment.text.substring(0, 100) + '...' : comment.text}</td>
                        <td class="sentiment-${comment.sentiment}">${comment.sentiment.toUpperCase()}</td>
                        <td>${Math.round(comment.confidence * 100)}%</td>
                        <td>${comment.themes.slice(0, 2).join(', ')}</td>
                    </tr>
                `).join('')}
                ${data.comments.length > 10 ? `<tr><td colspan="5" style="text-align: center; font-style: italic;">... and ${data.comments.length - 10} more comments</td></tr>` : ''}
            </tbody>
        </table>
    </div>
    ` : ''}

    <div class="footer">
        <p><strong>Policy Insights - Legislative Feedback Analysis System</strong></p>
        <p>This automated analysis is designed to assist policy makers in understanding public feedback patterns and sentiment.</p>
        <p>For complete data export, please use the CSV download option.</p>
    </div>
</body>
</html>`;

    // Create blob and download
    const blob = new Blob([reportHTML], { type: 'text/html' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `policy-insights-report-${new Date().toISOString().split('T')[0]}.html`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsExporting(null), 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Download className="h-5 w-5 mr-2 text-blue-600" />
          Export Results
        </CardTitle>
        <CardDescription>
          Download analysis results in multiple formats
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <Button
            onClick={exportToCSV}
            disabled={isExporting !== null}
            variant="outline"
            className="w-full justify-start"
          >
            {isExporting === 'csv' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileSpreadsheet className="h-4 w-4 mr-2" />
            )}
            Export as CSV
            <Badge variant="secondary" className="ml-auto">
              Data
            </Badge>
          </Button>

          <Button
            onClick={exportToPDF}
            disabled={isExporting !== null}
            variant="outline"
            className="w-full justify-start"
          >
            {isExporting === 'pdf' ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <FileText className="h-4 w-4 mr-2" />
            )}
            Export Report (HTML)
            <Badge variant="secondary" className="ml-auto">
              Report
            </Badge>
          </Button>
        </div>

        <Separator />

        <div className="text-sm text-slate-600 space-y-2">
          <div className="flex items-start space-x-2">
            <div className="w-1 h-1 bg-slate-400 rounded-full mt-2"></div>
            <p><strong>CSV:</strong> Individual comments with sentiment analysis and word frequencies</p>
          </div>
          <div className="flex items-start space-x-2">
            <div className="w-1 h-1 bg-slate-400 rounded-full mt-2"></div>
            <p><strong>Report:</strong> Comprehensive analysis with insights, sentiment summary, and recommendations</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-sm text-blue-800">
            <strong>Pro Tip:</strong> Reports can be converted to PDF using your browser's print function or online converters.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
