import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutUsPage() {
  const teamMembers = PlaceHolderImages;

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tighter mb-4">
          Meet the Team
        </h1>
        <p className="font-headline text-lg md:text-xl text-primary font-semibold">
          Neva
        </p>
        <p className="italic text-muted-foreground mb-6">
          "A connected educational future"
        </p>
        <p className="max-w-3xl mx-auto text-lg text-foreground/80 mb-12">
          Hi, we’re Paula, Heidie, Mayra and Jacky. This vlog will be about what your little one can eat on a daily basis. We hope you enjoy it.
        </p>
      </section>

      <section>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {teamMembers.map((member) => (
              <CarouselItem key={member.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <div className="aspect-square relative w-full overflow-hidden rounded-lg">
                        <Image
                          src={member.imageUrl}
                          alt={`Photo of ${member.id}`}
                          fill
                          className="object-cover"
                          data-ai-hint={member.imageHint}
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col text-center">
                      <CardTitle className="font-headline capitalize">{member.id}</CardTitle>
                      <CardDescription className="mt-2 flex-grow">
                        {member.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </section>
    </div>
  );
}
