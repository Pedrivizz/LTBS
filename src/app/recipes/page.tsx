import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Banana, Carrot, Drumstick, GlassWater, Milk, Sandwich, Wheat, ChevronsRight, Apple, Rice, Salad, CookingPot, Utensils, Egg, Coffee } from 'lucide-react';

const mealPlans = [
  {
    title: 'Plan 1 – Breakfast',
    icon: <Utensils className="h-6 w-6 text-primary" />,
    items: [
      { text: 'A glass of milk', icon: <Milk className="h-5 w-5 text-accent-foreground" /> },
      { text: 'An apple', icon: <Apple className="h-5 w-5 text-accent-foreground" /> },
      { text: 'Some whole-grain cereal', icon: <Wheat className="h-5 w-5 text-accent-foreground" /> },
      { text: 'A lot of water during the morning', icon: <GlassWater className="h-5 w-5 text-accent-foreground" /> },
    ],
  },
  {
    title: 'Plan 2 – Lunch',
    icon: <Drumstick className="h-6 w-6 text-primary" />,
    items: [
      { text: 'A chicken sandwich', icon: <Sandwich className="h-5 w-5 text-accent-foreground" /> },
      { text: 'Some carrot sticks', icon: <Carrot className="h-5 w-5 text-accent-foreground" /> },
      { text: 'An orange', icon: <ChevronsRight className="h-5 w-5 text-accent-foreground" /> },
      { text: 'A lot of vegetables on the plate', icon: <Salad className="h-5 w-5 text-accent-foreground" /> },
    ],
  },
  {
    title: 'Plan 3 – Snack / Dinner',
    icon: <CookingPot className="h-6 w-6 text-primary" />,
    items: [
      { text: 'A yogurt', icon: <Milk className="h-5 w-5 text-accent-foreground" /> },
      { text: 'Some cheese cubes', icon: <ChevronsRight className="h-5 w-5 text-accent-foreground" /> },
      { text: 'A banana', icon: <Banana className="h-5 w-5 text-accent-foreground" /> },
      { text: 'A lot of fruit salad', icon: <Salad className="h-5 w-5 text-accent-foreground" /> },
    ],
  },
];

const studentIdeas = [
  {
    name: 'Ana',
    plan: 'Ana usually eats a banana and drinks some milk for breakfast because she likes to start her day with fruit and something healthy to drink. At lunch, she eats a lot of rice with some chicken and sometimes also has a salad. For dinner, she doesn’t have any soup, but she eats a sandwich with some cheese and drinks a glass of water.',
  },
  {
    name: 'Luis',
    plan: 'Luis always eats an apple and drinks some orange juice for breakfast, and he sometimes eats a piece of bread with butter. At lunch, he eats some potatoes and a lot of fish, and he also drinks some lemonade. For dinner, he doesn’t eat any bread, but he drinks some tea and eats a sandwich with ham and a lot of lettuce.',
  },
  {
    name: 'Sofía',
    plan: 'Sofía has some eggs and a cup of hot chocolate for breakfast, and sometimes she adds a slice of bread with jam. At lunch, she eats a lot of vegetables with some meat, and she drinks some water or a glass of juice. For dinner, she doesn’t drink any soda, but she eats a salad and a piece of chicken, and sometimes she finishes with a fruit like an apple.',
  },
  {
    name: 'Diego',
    plan: 'Diego eats a sandwich and drinks some coffee for breakfast, and sometimes he has an orange too. At lunch, he eats a lot of pasta with some cheese and drinks some water or a glass of juice. For dinner, he doesn’t have any fruit, but he eats an omelette with some bread and drinks a little milk before going to bed.',
  },
];

export default function RecipesPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
          Delicious Meal Plans
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          Explore our teacher-approved meal plans designed to be both nutritious and delicious for your little ones.
        </p>
      </header>

      <section className="max-w-3xl mx-auto mb-16">
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
          {mealPlans.map((plan, index) => (
            <AccordionItem key={plan.title} value={`item-${index}`}>
              <AccordionTrigger className="text-xl font-headline hover:no-underline">
                <div className="flex items-center gap-4">
                  {plan.icon}
                  {plan.title}
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-3 pl-4 pt-2">
                  {plan.items.map((item) => (
                    <li key={item.text} className="flex items-center gap-3 text-base">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tighter mb-4">
            Student Meal Ideas
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-foreground/80">
            Get inspired by what other kids enjoy! Here are some favorite meal combinations from students.
          </p>
        </header>
        <div className="grid gap-8 md:grid-cols-2">
          {studentIdeas.map((student) => (
            <Card key={student.name} className="bg-secondary/20">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">{student.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/90 leading-relaxed">{student.plan}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
