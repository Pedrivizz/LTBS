import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ArrowRight, BookOpen, ChefHat, HeartHandshake, MessageSquarePlus } from 'lucide-react';
import Link from 'next/link';

const sections = [
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    title: 'About Us',
    description: 'Meet the team behind the smiles and our mission to make eating fun.',
    href: '/about',
    color: 'bg-secondary/40',
  },
  {
    icon: <ChefHat className="h-8 w-8 text-primary" />,
    title: 'Recipes',
    description: "Discover yummy, easy-to-make recipes that your kids will love.",
    href: '/recipes',
    color: 'bg-accent/40',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    title: 'Final Tips',
    description: 'Helpful advice to build healthy and happy eating habits for a lifetime.',
    href: '/tips',
    color: 'bg-secondary/40',
  },
  {
    icon: <MessageSquarePlus className="h-8 w-8 text-primary" />,
    title: 'Leave a Comment',
    description: 'Share your ideas and suggestions. We want to hear from you!',
    href: '/comments',
    color: 'bg-accent/40',
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter mb-4">
          Nourishing the Next Generation
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-foreground/80 mb-8">
          Welcome to a world of delicious and nutritious meals designed for little ones. We believe that healthy eating should be joyful, simple, and a delightful adventure for the whole family.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/recipes">View Recipes <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/about">About Us</Link>
          </Button>
        </div>
      </section>

      <section className="mt-16 md:mt-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Card key={section.title} className="flex flex-col transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="flex-row items-center gap-4 space-y-0">
                <div className={`p-3 rounded-full ${section.color}`}>
                  {section.icon}
                </div>
                <CardTitle className="font-headline">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{section.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="px-0">
                  <Link href={section.href}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
