import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Award } from 'lucide-react';

const tips = [
  {
    title: 'Tip 1: Smart Snacking',
    content: 'It is important to give children some apples and some carrots as snacks every day so they can eat fruits and vegetables regularly. These foods give them vitamins and energy without adding sugar, and parents should try not to give them any sweets or processed snacks between meals.',
  },
  {
    title: 'Tip 2: Powerful Breakfasts',
    content: 'At breakfast, offer children some milk and a sandwich with cheese or turkey so they start the day with protein and healthy carbohydrates. This combination helps them feel full, and it is better not to let them drink any soda or very sugary drinks in the morning.',
  },
  {
    title: 'Tip 3: Balanced Lunches',
    content: 'During lunch, prepare some rice and some beans with a piece of chicken or fish so they have energy and proteins in a balanced way. Try to add some vegetables to their plate, and avoid giving them any junk food like chips or very salty snacks.',
  },
];

const conclusion = {
  title: 'Conclusion: Building Healthy Habits',
  content: 'In general, when children eat some fruits and vegetables at every meal and receive a lot of nutritious foods such as rice, chicken, fish or eggs, their diet becomes more balanced and varied. In addition, by offering them some water and some natural juice during the day and avoiding giving them any soda or junk food, healthy habits are promoted from an early age. Combining countable foods (like an apple, a sandwich or a piece of chicken) and uncountable foods (like milk, water or rice) helps parents plan better menus. In this way, children have more energy, grow healthy and learn to choose good options for their breakfast, lunch and dinner.',
};

export default function FinalTipsPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
          Our Final Tips
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80">
          A few simple tips to help you make mealtime healthier and happier for everyone.
        </p>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        {tips.map((tip, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center gap-4">
              <Lightbulb className="h-6 w-6 text-primary" />
              <CardTitle className="font-headline">{tip.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/90 leading-relaxed">{tip.content}</p>
            </CardContent>
          </Card>
        ))}

        <Card className="bg-accent/50 border-accent">
          <CardHeader className="flex flex-row items-center gap-4">
            <Award className="h-6 w-6 text-accent-foreground" />
            <CardTitle className="font-headline text-accent-foreground">{conclusion.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-accent-foreground/90 leading-relaxed font-medium">{conclusion.content}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
