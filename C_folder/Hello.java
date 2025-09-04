public class Hello {
    public static void main(String[] args) {
        String s = "The sky is    blue  ";

        // Step 1: Remove leading/trailing spaces
        s = s.trim();

        // Step 2: Replace multiple spaces with a single space
        s = s.replaceAll("\\s+", " ");

        // Step 3: Reverse the entire sentence
        StringBuilder str = new StringBuilder(s);
        str.reverse();

        // Step 4: Print the result
        System.out.println(str);
    }
}
