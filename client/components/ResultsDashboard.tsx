import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, TrendingDown, Minus, FileText, Users, MessageSquare } from "lucide-react";
import WordCloudVisualization from "@/components/WordCloudVisualization";
import ExportPanel from "@/components/ExportPanel";

interface Comment {
  id: string;
  text: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  confidence: number;
  themes: string[];
}

interface Summary {
  totalComments: number;
  positiveCount: number;
  negativeCount: number;
  neutralCount: number;
  keyInsights: string[];
  mainConcerns: string[];
  supportedAspects: string[];
}

interface ResultsDashboardProps {
  data: {
    wordCloud: Array<{ text: string; value: number }>;
    totalWords: number;
    uniqueWords: number;
    topThemes: Array<{ text: string; value: number }>;
    inputText: string;
    comments: Comment[];
    summary: Summary;
  };
}

const sentimentColors = {
  positive: "text-green-700 bg-green-100",
  negative: "text-red-700 bg-red-100", 
  neutral: "text-gray-700 bg-gray-100"
};

const sentimentIcons = {
  positive: <TrendingUp className="h-4 w-4" />,
  negative: <TrendingDown className="h-4 w-4" />,
  neutral: <Minus className="h-4 w-4" />
};

export default function ResultsDashboard({ data }: ResultsDashboardProps) {
  const [selectedSentiment, setSelectedSentiment] = useState<string>('all');

  const filteredComments = selectedSentiment === 'all' 
    ? data.comments 
    : data.comments.filter(comment => comment.sentiment === selectedSentiment);

  const sentimentPercentages = {
    positive: Math.round((data.summary.positiveCount / data.summary.totalComments) * 100),
    negative: Math.round((data.summary.negativeCount / data.summary.totalComments) * 100),
    neutral: Math.round((data.summary.neutralCount / data.summary.totalComments) * 100)
  };

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
            <MessageSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{data.summary.totalComments}</div>
            <p className="text-xs text-muted-foreground">Analyzed responses</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Positive</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{sentimentPercentages.positive}%</div>
            <p className="text-xs text-muted-foreground">{data.summary.positiveCount} comments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Negative</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{sentimentPercentages.negative}%</div>
            <p className="text-xs text-muted-foreground">{data.summary.negativeCount} comments</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Neutral</CardTitle>
            <Minus className="h-4 w-4 text-gray-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-600">{sentimentPercentages.neutral}%</div>
            <p className="text-xs text-muted-foreground">{data.summary.neutralCount} comments</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
          <TabsTrigger value="export">Export</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Sentiment Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Sentiment Distribution</CardTitle>
                <CardDescription>Overall sentiment breakdown of all comments</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">Positive</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{data.summary.positiveCount} comments</span>
                  </div>
                  <Progress value={sentimentPercentages.positive} className="h-2 bg-gray-200">
                    <div className="h-full bg-green-500 rounded-full transition-all" 
                         style={{ width: `${sentimentPercentages.positive}%` }} />
                  </Progress>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <TrendingDown className="h-4 w-4 text-red-600" />
                      <span className="text-sm font-medium">Negative</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{data.summary.negativeCount} comments</span>
                  </div>
                  <Progress value={sentimentPercentages.negative} className="h-2 bg-gray-200">
                    <div className="h-full bg-red-500 rounded-full transition-all" 
                         style={{ width: `${sentimentPercentages.negative}%` }} />
                  </Progress>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Minus className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium">Neutral</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{data.summary.neutralCount} comments</span>
                  </div>
                  <Progress value={sentimentPercentages.neutral} className="h-2 bg-gray-200">
                    <div className="h-full bg-gray-500 rounded-full transition-all" 
                         style={{ width: `${sentimentPercentages.neutral}%` }} />
                  </Progress>
                </div>
              </CardContent>
            </Card>

            {/* Word Cloud */}
            <Card>
              <CardHeader>
                <CardTitle>Key Terms Visualization</CardTitle>
                <CardDescription>Most frequently mentioned words and themes</CardDescription>
              </CardHeader>
              <CardContent>
                <WordCloudVisualization data={data.wordCloud} />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="comments" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comment Analysis</CardTitle>
              <CardDescription>Individual comments with sentiment predictions and confidence scores</CardDescription>
              <div className="flex space-x-2">
                <Button 
                  variant={selectedSentiment === 'all' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedSentiment('all')}
                >
                  All ({data.summary.totalComments})
                </Button>
                <Button 
                  variant={selectedSentiment === 'positive' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedSentiment('positive')}
                  className="text-green-700"
                >
                  Positive ({data.summary.positiveCount})
                </Button>
                <Button 
                  variant={selectedSentiment === 'negative' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedSentiment('negative')}
                  className="text-red-700"
                >
                  Negative ({data.summary.negativeCount})
                </Button>
                <Button 
                  variant={selectedSentiment === 'neutral' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setSelectedSentiment('neutral')}
                  className="text-gray-700"
                >
                  Neutral ({data.summary.neutralCount})
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">ID</TableHead>
                    <TableHead>Comment</TableHead>
                    <TableHead className="w-[120px]">Sentiment</TableHead>
                    <TableHead className="w-[100px]">Confidence</TableHead>
                    <TableHead className="w-[150px]">Key Themes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredComments.map((comment, index) => (
                    <TableRow key={comment.id}>
                      <TableCell className="font-medium">#{index + 1}</TableCell>
                      <TableCell className="max-w-md">
                        <p className="text-sm line-clamp-3">{comment.text}</p>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={sentimentColors[comment.sentiment]}>
                          <span className="flex items-center space-x-1">
                            {sentimentIcons[comment.sentiment]}
                            <span className="capitalize">{comment.sentiment}</span>
                          </span>
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm font-medium">{Math.round(comment.confidence * 100)}%</div>
                        <Progress value={comment.confidence * 100} className="h-1 mt-1" />
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {comment.themes.slice(0, 2).map((theme, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {theme}
                            </Badge>
                          ))}
                          {comment.themes.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{comment.themes.length - 2}
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                  Supported Aspects
                </CardTitle>
                <CardDescription>What stakeholders are positive about</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {data.summary.supportedAspects.map((aspect, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <p className="text-sm text-slate-700">{aspect}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingDown className="h-5 w-5 mr-2 text-red-600" />
                  Main Concerns
                </CardTitle>
                <CardDescription>Issues and concerns raised by stakeholders</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {data.summary.mainConcerns.map((concern, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <p className="text-sm text-slate-700">{concern}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
                  Key Insights & Recommendations
                </CardTitle>
                <CardDescription>AI-generated summary and actionable recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {data.summary.keyInsights.map((insight, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                      <p className="text-sm text-slate-700 leading-relaxed">{insight}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="export">
          <ExportPanel data={data} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
