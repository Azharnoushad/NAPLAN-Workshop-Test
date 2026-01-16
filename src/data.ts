export const naplanData = {
  programme: 'NAPLAN',
  mode: 'Workshop',
  skills: [
    {
      id: 'language-conventions',
      name: 'Language Conventions',
      description: 'Practice grammar, punctuation, and spelling',
      questions: [
        {
          id: 1,
          text: 'Which sentence uses punctuation correctly?',
          options: [
            'Where are you going.',
            'Where are you going?',
            'Where are you going!',
          ],
          correctIndex: 1,
          explanation:
            "Questions end with a question mark (?). This sentence is asking where someone is going, so it needs a question mark.",
        },
        {
          id: 2,
          text: 'Choose the sentence with the correct verb.',
          options: [
            'The group of students are ready.',
            'The group of students is ready.',
          ],
          correctIndex: 1,
          explanation:
            "The subject 'group' is singular (one group), so we use the singular verb 'is'. Even though there are many students, we're talking about one group.",
        },
        {
          id: 3,
          text: 'Which word correctly completes the sentence: She ___ finished her work.',
          options: ['has', 'have'],
          correctIndex: 0,
          explanation:
            "'She' is singular (one person), so we use 'has'. We use 'have' with plural subjects like 'they' or 'we'.",
        },
        {
          id: 4,
          text: 'Which sentence uses the apostrophe correctly?',
          options: [
            'The dogs tail wagged happily.',
            "The dog's tail wagged happily.",
            "The dogs' tail wagged happily.",
          ],
          correctIndex: 1,
          explanation:
            "The apostrophe shows that the tail belongs to the dog. We write 'dog's' when one dog owns something.",
        },
        {
          id: 5,
          text: 'Choose the correct spelling:',
          options: ['recieve', 'receive', 'recive'],
          correctIndex: 1,
          explanation: "The correct spelling is 'receive'. Remember: 'i' before 'e' except after 'c'!",
        },
        {
          id: 6,
          text: 'Which sentence is written correctly?',
          options: [
            'Me and my friend went to the park.',
            'My friend and I went to the park.',
            'My friend and me went to the park.',
          ],
          correctIndex: 1,
          explanation:
            "When talking about yourself and others, use 'I' (not 'me') as the subject. Also, it's polite to mention others before yourself.",
        },
        {
          id: 7,
          text: 'Which word should be capitalized?',
          options: [
            'We visited sydney last summer.',
            'We visited Sydney last summer.',
            'we visited Sydney last summer.',
          ],
          correctIndex: 1,
          explanation:
            "Sydney is the name of a city, so it's a proper noun and needs a capital letter. The first word 'We' also needs a capital because it starts the sentence.",
        },
        {
          id: 8,
          text: 'Choose the sentence with correct comma usage:',
          options: [
            'I need to buy eggs milk bread and butter.',
            'I need to buy eggs, milk, bread and butter.',
            'I need to buy eggs, milk, bread, and butter.',
          ],
          correctIndex: 2,
          explanation:
            "When listing items, we use commas to separate them. The comma before 'and' (called the Oxford comma) makes the list clearer.",
        },
      ],
    },
    {
      id: 'reading',
      name: 'Reading',
      description: 'Practice reading comprehension and understanding texts',
      questions: [
        {
          id: 9,
          text: "Read this sentence: 'The enormous elephant elegantly entered the enclosure.' What does 'elegantly' mean?",
          options: ['Loudly', 'Gracefully', 'Quickly', 'Clumsily'],
          correctIndex: 1,
          explanation:
            "'Elegantly' means in a graceful and stylish way. Even though the elephant is enormous, it moved in a smooth, graceful manner.",
        },
        {
          id: 10,
          text: "What is the main idea of this passage? 'Dolphins are intelligent marine mammals. They communicate using clicks and whistles. Dolphins live in groups called pods and work together to find food.'",
          options: [
            'Dolphins make clicking sounds',
            'Dolphins are smart animals that communicate and live in groups',
            'Dolphins live in the ocean',
            'Dolphins eat fish',
          ],
          correctIndex: 1,
          explanation:
            'The main idea covers the most important points in the passage: dolphins are intelligent, they communicate, and they live in groups. The other options are details, not the main idea.',
        },
        {
          id: 11,
          text: "'Sarah reluctantly put on her jacket.' How does Sarah feel about wearing her jacket?",
          options: [
            'She is excited to wear it',
            "She doesn't want to wear it",
            'She forgot to wear it',
            'She loves wearing it',
          ],
          correctIndex: 1,
          explanation:
            "'Reluctantly' means unwilling or hesitant. Sarah put on her jacket, but she didn't really want to.",
        },
        {
          id: 12,
          text: "What type of text is this? 'Mix flour, sugar, and eggs in a bowl. Bake at 180°C for 25 minutes. Let cool before serving.'",
          options: ['A story', 'A recipe', 'A poem', 'A letter'],
          correctIndex: 1,
          explanation:
            'This is a recipe because it gives step-by-step instructions for making food, including ingredients and cooking instructions.',
        },
        {
          id: 13,
          text: "Read: 'The ancient tree stood tall, its gnarled branches reaching toward the sky like twisted fingers.' What technique is the author using?",
          options: [
            'Comparing the branches to fingers (simile)',
            'Asking a question',
            'Repeating words',
            'Using dialogue',
          ],
          correctIndex: 0,
          explanation:
            "The author uses a simile by comparing the branches to 'twisted fingers' using the word 'like'. This helps us picture what the tree looks like.",
        },
        {
          id: 14,
          text: "'The crowd erupted in applause.' What does 'erupted' suggest about the applause?",
          options: [
            'It was quiet and polite',
            'It was sudden and loud',
            'It lasted a long time',
            'It was from one person',
          ],
          correctIndex: 1,
          explanation:
            "'Erupted' means to break out suddenly and forcefully, like a volcano. This tells us the applause was sudden, loud, and enthusiastic.",
        },
        {
          id: 15,
          text: "What is the purpose of this text? 'Visit Sunny Beach Resort! Enjoy crystal-clear waters, golden sands, and luxury accommodation. Book now and save 20%!'",
          options: [
            'To inform readers about beaches',
            'To persuade people to visit the resort',
            'To tell a story about a holiday',
            'To explain how to swim',
          ],
          correctIndex: 1,
          explanation:
            "This is an advertisement trying to persuade (convince) people to visit and book the resort. Words like 'enjoy', 'luxury', and 'save 20%' are designed to attract customers.",
        },
        {
          id: 16,
          text: "Read: 'Although it was raining, the children played outside.' What does 'although' tell us?",
          options: [
            'The rain happened after the playing',
            'The children played despite the rain',
            'The children stayed inside',
            'It stopped raining',
          ],
          correctIndex: 1,
          explanation:
            "'Although' introduces a contrast. It shows that even though it was raining (which might normally stop them), the children still played outside.",
        },
      ],
    },
    {
      id: 'numeracy',
      name: 'Numeracy',
      description: 'Practice number skills, problem-solving, and mathematical thinking',
      questions: [
        {
          id: 17,
          text: 'What is 47 + 38?',
          options: ['75', '85', '95', '105'],
          correctIndex: 1,
          explanation:
            '47 + 38 = 85. You can break it down: 40 + 30 = 70, then 7 + 8 = 15, so 70 + 15 = 85.',
        },
        {
          id: 18,
          text: 'A rectangle has a length of 8cm and a width of 5cm. What is its area?',
          options: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'],
          correctIndex: 2,
          explanation:
            'To find the area of a rectangle, multiply length × width: 8 × 5 = 40 cm².',
        },
        {
          id: 19,
          text: 'Which fraction is equivalent to 1/2?',
          options: ['2/3', '3/6', '2/5', '1/4'],
          correctIndex: 1,
          explanation:
            '3/6 equals 1/2 because if you divide both the top and bottom by 3, you get 1/2. They represent the same amount.',
        },
        {
          id: 20,
          text: 'Emma has $50. She spends $12 on a book and $15 on a toy. How much money does she have left?',
          options: ['$23', '$27', '$33', '$38'],
          correctIndex: 0,
          explanation:
            'First, add what Emma spent: $12 + $15 = $27. Then subtract from what she had: $50 - $27 = $23.',
        },
        {
          id: 21,
          text: 'What is 7 × 8?',
          options: ['54', '56', '63', '64'],
          correctIndex: 1,
          explanation: '7 × 8 = 56. You can think of it as 7 groups of 8, or 8 groups of 7.',
        },
        {
          id: 22,
          text: 'A train leaves at 3:45 PM and arrives at 5:20 PM. How long was the journey?',
          options: [
            '1 hour 15 minutes',
            '1 hour 25 minutes',
            '1 hour 35 minutes',
            '2 hours 35 minutes',
          ],
          correctIndex: 2,
          explanation:
            'From 3:45 to 4:45 is 1 hour. From 4:45 to 5:20 is 35 minutes. So the total journey is 1 hour and 35 minutes.',
        },
        {
          id: 23,
          text: 'What is the next number in this pattern? 3, 6, 9, 12, ___',
          options: ['13', '14', '15', '16'],
          correctIndex: 2,
          explanation:
            'Each number increases by 3 (this is the 3 times table). So 12 + 3 = 15.',
        },
        {
          id: 24,
          text: 'Which of these numbers is a prime number?',
          options: ['15', '21', '23', '27'],
          correctIndex: 2,
          explanation:
            '23 is prime because it can only be divided evenly by 1 and itself. 15, 21, and 27 can be divided by other numbers too.',
        },
      ],
    },
    {
      id: 'writing',
      name: 'Writing',
      description: 'Practice writing techniques, sentence structure, and creative expression',
      questions: [
        {
          id: 25,
          text: 'Which sentence has the most descriptive language?',
          options: [
            'The dog ran.',
            'The brown dog ran quickly.',
            'The energetic golden retriever bounded enthusiastically across the lush green field.',
          ],
          correctIndex: 2,
          explanation:
            "The third sentence uses descriptive words like 'energetic', 'golden', 'bounded', 'enthusiastically', and 'lush green' to paint a vivid picture.",
        },
        {
          id: 26,
          text: 'Which sentence would be the best opening for a story?',
          options: [
            'This story is about a mystery.',
            'The old mansion had been abandoned for years, but tonight, a light flickered in the upstairs window.',
            'There was a house.',
          ],
          correctIndex: 1,
          explanation:
            'The second sentence creates intrigue and atmosphere, making readers want to know more. It uses specific details and hints at mystery.',
        },
        {
          id: 27,
          text: 'Which sentence uses better word choice to show someone is happy?',
          options: [
            'She was happy.',
            'She was very happy.',
            'She beamed with delight, her eyes sparkling with joy.',
          ],
          correctIndex: 2,
          explanation:
            "Instead of just saying 'happy', the third sentence shows happiness through actions and details: beaming, eyes sparkling. This is called 'show, don't tell'.",
        },
        {
          id: 28,
          text: "Which sentence correctly combines these two ideas? 'The rain stopped. We went outside.'",
          options: [
            'The rain stopped we went outside.',
            'The rain stopped, so we went outside.',
            'The rain stopped we went outside and played.',
          ],
          correctIndex: 1,
          explanation:
            "The second sentence correctly uses a comma and 'so' to connect the two ideas, showing that one thing led to another.",
        },
        {
          id: 29,
          text: 'Which sentence shows better sentence variety?',
          options: [
            'The cat sat. The cat slept. The cat purred.',
            'The cat sat, slept, and purred.',
            'The cat sat contentedly. After a while, it curled up and slept. Soon, gentle purring filled the room.',
          ],
          correctIndex: 2,
          explanation:
            'The third option uses different sentence lengths and structures, making the writing more interesting. It also includes descriptive details and shows time passing.',
        },
        {
          id: 30,
          text: "Which transition word best connects these sentences? 'I studied hard for the test. ___, I felt confident during the exam.'",
          options: ['However', 'Therefore', 'Meanwhile', 'Unless'],
          correctIndex: 1,
          explanation:
            "'Therefore' shows that feeling confident was a result of studying hard. It connects cause and effect.",
        },
        {
          id: 31,
          text: 'Which sentence has a clear topic sentence for a paragraph about recycling?',
          options: [
            'Recycling is good.',
            'There are many bins.',
            'Recycling helps protect our environment in several important ways.',
          ],
          correctIndex: 2,
          explanation:
            "The third sentence clearly states the main idea (recycling helps the environment) and hints that examples will follow ('several important ways').",
        },
        {
          id: 32,
          text: 'Which ending provides the best conclusion for a story about overcoming fear?',
          options: [
            'The end.',
            "As she walked away from the stage, Sarah realized that courage isn't about not being afraid—it's about doing things even when you are.",
            'And then she went home.',
          ],
          correctIndex: 1,
          explanation:
            'The second option provides a meaningful conclusion that reflects on what the character learned. It gives the reader something to think about.',
        },
      ],
    },
  ],
}

