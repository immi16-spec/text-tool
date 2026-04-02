import { CaseUpper, Combine, Languages, ListFilter, type LucideIcon, Pilcrow, Repeat, Route, Sparkles, Type, UnfoldHorizontal } from 'lucide-react';

export type Tool = {
  name: string;
  description: string;
  path: string;
  icon: LucideIcon;
  isMain?: boolean;
  content: {
    what: string;
    how: string;
    useCases: { title: string; description: string }[];
  };
  faq: { question: string; answer: string }[];
};

export const tools: Tool[] = [
  {
    name: 'Fancy Text Generator',
    description: 'Create cool and stylish text with 70+ fonts to copy and paste.',
    path: '/tools/fancy-text-generator',
    icon: Sparkles,
    isMain: true,
    content: {
      what: 'The Fancy Text Generator transforms your standard text into a variety of unique and stylish fonts using Unicode characters. These special text styles can be copied and pasted into social media bios, posts, and messages to make your content stand out.',
      how: 'Simply type or paste your text into the input box. The tool will instantly generate over 70 different styles. Scroll through the list, find one you like, and click the "Copy" button next to it. You can then paste it anywhere that supports Unicode characters.',
      useCases: [
        { title: 'Social Media Profiles', description: 'Make your Instagram bio, Twitter profile, and Facebook name unique.' },
        { title: 'Digital Art and Design', description: 'Incorporate stylized text into your graphics and digital creations.' },
        { title: 'Gaming Usernames', description: 'Create a memorable and cool username for platforms like Discord, Steam, and Twitch.' },
      ],
    },
    faq: [
      { question: 'Is the Fancy Text Generator free to use?', answer: 'Yes, it is completely free. There are no hidden charges or sign-up requirements.' },
      { question: 'Where can I use these fancy text styles?', answer: 'You can use them on most platforms that support Unicode, including Instagram, Twitter, Facebook, WhatsApp, Discord, and many more.' },
    ],
  },
  {
    name: 'Word Counter',
    description: 'Count words, characters, sentences, and paragraphs in your text.',
    path: '/tools/word-counter',
    icon: Type,
    content: {
      what: 'The Word Counter is a utility that provides a detailed analysis of your text, including the number of words, characters (with and without spaces), sentences, and paragraphs. It is an essential tool for writers, students, and professionals who need to meet specific length requirements.',
      how: 'Paste or type your text into the input area. The tool will automatically update the counts for words, characters, sentences, and paragraphs in real-time. There are no buttons to press; the results are instant.',
      useCases: [
        { title: 'Academic Essays', description: 'Ensure your essays and papers meet the required word count.' },
        { title: 'Social Media Posts', description: 'Stay within character limits on platforms like Twitter.' },
        { title: 'SEO Content', description: 'Optimize meta descriptions and titles for search engines by tracking character counts.' },
      ],
    },
    faq: [
        { question: 'How does it count words?', answer: 'The tool counts words by splitting the text by spaces and other whitespace characters.' },
        { question: 'Is the character count accurate?', answer: 'Yes, it provides a count for characters both including and excluding spaces for precise measurement.' },
    ]
  },
  {
    name: 'Space Remover',
    description: 'Remove extra spaces, line breaks, and trim your text.',
    path: '/tools/space-remover',
    icon: UnfoldHorizontal,
    content: {
        what: 'The Space Remover is a simple tool for cleaning up text by removing unnecessary whitespace. It can eliminate extra spaces between words, remove leading and trailing spaces, and optionally remove all line breaks, collapsing your text into a single line.',
        how: 'Paste your text into the input field. Click the "Remove Extra Spaces" button to reduce multiple spaces to a single space. Use the "Remove Line Breaks" button to merge all text onto one line.',
        useCases: [
          { title: 'Data Cleaning', description: 'Normalize user-submitted data by removing inconsistent spacing.' },
          { title: 'Code Formatting', description: 'Clean up copied code snippets that have extra unwanted spaces.' },
          { title: 'Fixing Pasted Text', description: 'Correct formatting issues when pasting text from PDFs or other sources.' },
        ],
      },
      faq: [
          { question: 'Does this tool remove all spaces?', answer: 'No, it only removes "extra" spaces between words and spaces at the beginning or end of the text. It preserves single spaces needed for readability.' },
          { question: 'What is the difference between removing extra spaces and removing line breaks?', answer: 'Removing extra spaces cleans up spacing on each line, while removing line breaks combines all lines into one single paragraph.' },
      ]
  },
  {
    name: 'Case Converter',
    description: 'Convert text to uppercase, lowercase, title case, and more.',
    path: '/tools/case-converter',
    icon: CaseUpper,
    content: {
        what: 'The Case Converter allows you to easily change the text case of your content. You can switch between UPPERCASE, lowercase, Title Case, and Sentence case with a single click, saving you the time of manually re-typing.',
        how: 'Enter your text into the input area. Below the input, you will find buttons for each case type (e.g., "UPPERCASE", "lowercase"). Click the button for the desired case, and the text will be instantly converted in the output box.',
        useCases: [
          { title: 'Formatting Headlines', description: 'Quickly convert blog post titles or email subject lines to Title Case.' },
          { title: 'Data Normalization', description: 'Ensure consistency in datasets by converting all text to a single case, like lowercase.' },
          { title: 'Correcting Typing Errors', description: 'Fix text that was accidentally typed in all caps.' },
        ],
      },
      faq: [
          { question: 'What is "Title Case"?', answer: 'Title Case is a style where the first letter of each word is capitalized, except for certain small words like articles and prepositions.' },
          { question: 'Is there a limit to how much text I can convert?', answer: 'No, the tool can handle large amounts of text, though performance may vary with extremely large inputs in your browser.' },
      ]
  },
  {
    name: 'Text Reverser',
    description: 'Reverse characters, words, or flip text upside down.',
    path: '/tools/text-reverser',
    icon: Repeat,
    content: {
        what: 'The Text Reverser tool offers multiple ways to manipulate your text, including reversing the entire string of characters, reversing the order of words, and even flipping the text upside down using special Unicode characters.',
        how: 'Type or paste your text into the input field. Use the "Reverse Text", "Reverse Words", or "Flip Text" buttons to see the different transformations in the output area.',
        useCases: [
          { title: 'Creative Effects', description: 'Create fun and interesting text effects for social media.' },
          { title: 'Data Processing', description: 'Reverse strings for specific programming or data manipulation tasks.' },
          { title: 'Puzzles and Games', description: 'Generate backwards text for use in puzzles or games.' },
        ],
      },
      faq: [
          { question: 'What is the difference between reversing text and reversing words?', answer: '"Reverse Text" reverses every character (e.g., "hello world" becomes "dlrow olleh"). "Reverse Words" reverses the order of words but keeps the words themselves intact (e.g., "hello world" becomes "world hello").' },
          { question: 'How does the "Flip Text" feature work?', answer: 'It uses a special set of Unicode characters that look like upside-down versions of the standard alphabet to create the visual effect of flipped text.' },
      ]
  },
  {
    name: 'Duplicate Remover',
    description: 'Remove duplicate lines or words from your text.',
    path: '/tools/duplicate-remover',
    icon: ListFilter,
    content: {
        what: 'The Duplicate Remover is a utility designed to clean up lists and text by eliminating repeated entries. It can remove entire duplicate lines or individual duplicate words while preserving the original order of the unique items.',
        how: 'Paste your text or list into the input box. Click "Remove Duplicate Lines" to get a list with only unique lines. Click "Remove Duplicate Words" to get text containing only unique words.',
        useCases: [
          { title: 'Cleaning Email Lists', description: 'Remove duplicate email addresses from a list before a marketing campaign.' },
          { title: 'Refining Keyword Lists', description: 'Ensure a list of SEO keywords contains only unique terms.' },
          { title: 'Processing Log Files', description: 'Filter log data to show only unique events or messages.' },
        ],
      },
      faq: [
          { question: 'Does the tool keep the original order?', answer: 'Yes, the tool removes duplicates based on their first appearance, preserving the original order of the remaining unique lines or words.' },
          { question: 'Is the comparison case-sensitive?', answer: 'Yes, the current implementation is case-sensitive. For example, "Apple" and "apple" would be treated as two different entries.' },
      ]
  },
  {
    name: 'Slug Generator',
    description: 'Create SEO-friendly URL slugs from your text.',
    path: '/tools/slug-generator',
    icon: Route,
    content: {
        what: 'A Slug Generator transforms any text, like a blog post title, into a URL-friendly string. It converts the text to lowercase, replaces spaces with hyphens, and removes any special characters, making it ideal for creating clean, readable, and SEO-friendly URLs.',
        how: 'Enter the title or text you want to convert into the input box. The tool will instantly generate a clean URL slug in the output box, ready to be copied and used.',
        useCases: [
          { title: 'Bloggers & Content Creators', description: 'Create clean URLs for new articles and posts.' },
          { title: 'Web Developers', description: 'Generate slugs for dynamic pages in a web application.' },
          { title: 'E-commerce Managers', description: 'Create user-friendly URLs for product pages.' },
        ],
      },
      faq: [
          { question: 'Why are SEO-friendly URLs important?', answer: 'Clean, descriptive URLs (slugs) are easier for both users and search engines to understand, which can improve your search ranking and click-through rates.' },
          { question: 'What characters are removed?', answer: 'The tool removes most non-alphanumeric characters, such as !, ?, @, #, etc., to ensure the slug is valid and clean.' },
      ]
  },
  {
    name: 'Grammar & Translate',
    description: 'Correct grammar and translate text into other languages.',
    path: '/tools/grammar-checker-translate',
    icon: Languages,
    content: {
        what: 'This powerful AI-driven tool first checks and corrects your text for grammatical errors, spelling mistakes, and awkward phrasing. Then, it can optionally translate the corrected text into a language of your choice, ensuring your message is both accurate and clear.',
        how: 'Enter your text into the input field. If you want to translate it, select a target language from the dropdown menu. Click "Process Text" and our AI will provide the corrected text and, if selected, the translation.',
        useCases: [
          { title: 'Writing Emails', description: 'Ensure your professional emails are error-free before sending.' },
          { title: 'Learning a Language', description: 'Check your writing and see how to phrase sentences correctly in another language.' },
          { title: 'Content Creation', description: 'Polish blog posts, articles, and social media updates for a professional touch.' },
        ],
      },
      faq: [
          { question: 'Is the AI always accurate?', answer: 'While our AI is highly advanced, it can sometimes make mistakes, especially with very nuanced or complex text. It\'s always a good idea to review the suggestions.' },
          { question: 'How many languages can it translate to?', answer: 'The tool supports a wide variety of common languages. The available options are listed in the dropdown menu.' },
      ]
  },
  {
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text with a specified number of paragraphs.',
    path: '/tools/lorem-ipsum-generator',
    icon: Pilcrow,
    content: {
        what: 'The Lorem Ipsum Generator creates placeholder text that is commonly used in graphic design, print, and web development. It allows designers and developers to fill a space with text to visualize the final layout without needing the final content.',
        how: 'Specify the number of paragraphs you want to generate. Click the "Generate" button, and the Lorem Ipsum text will appear in the output box, ready to be copied.',
        useCases: [
          { title: 'Web Design Mockups', description: 'Fill website layouts to preview typography and content flow.' },
          { title: 'Print Layouts', description: 'Use placeholder text in magazines, brochures, and posters.' },
          { title: 'Developer Testing', description: 'Populate databases and front-end components with sample text.' },
        ],
      },
      faq: [
          { question: 'What is Lorem Ipsum?', answer: 'Lorem Ipsum is dummy text from a scrambled piece of Latin literature. It has been the industry\'s standard for placeholder text since the 1500s.' },
          { question: 'Why use Lorem Ipsum instead of just repeating "text here"?', answer: 'It has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look more like readable English and giving a better representation of the final product.' },
      ]
  },
  {
    name: 'NATO Translator',
    description: 'Convert text to the NATO phonetic alphabet.',
    path: '/tools/nato-translator',
    icon: Combine,
    content: {
        what: 'The NATO Translator converts standard text into the NATO phonetic alphabet (e.g., "A" becomes "Alfa", "B" becomes "Bravo"). This alphabet is used to ensure clear communication over radio or telephone, as it replaces letters with easily understood code words.',
        how: 'Type any text into the input box. The tool will instantly translate each letter into its corresponding NATO phonetic alphabet word.',
        useCases: [
          { title: 'Clear Communication', description: 'Spell out important information like names, codes, or addresses over a phone call.' },
          { title: 'Aviation and Military', description: 'Used as the standard for communication in these fields.' },
          { title: 'Learning Tool', description: 'Memorize the NATO phonetic alphabet for professional or personal use.' },
        ],
      },
      faq: [
          { question: 'What is the NATO phonetic alphabet?', answer: 'It is the most widely used radiotelephone spelling alphabet. It is officially the "International Radiotelephony Spelling Alphabet," but is commonly known as the NATO phonetic alphabet.' },
          { question: 'Does it translate numbers and symbols?', answer: 'The standard implementation translates letters and numbers (e.g., "1" is "One," "2" is "Two"). Most punctuation is spelled out (e.g., "." is "Period").' },
      ]
  },
];
