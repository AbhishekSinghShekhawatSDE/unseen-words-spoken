import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { MessageForm } from '@/components/ui/message-form';
import { Heart, MessageCircle, Shield, Instagram, ArrowRight, Star, Users } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';
import typingIllustration from '@/assets/typing-illustration.jpg';

export const Home: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const features = [
    {
      icon: Heart,
      title: 'Express Anonymously',
      description: 'Share your deepest feelings without revealing your identity. Your emotions, your choice.',
    },
    {
      icon: Shield,
      title: 'Human-Reviewed',
      description: 'Every message is carefully reviewed by our team to ensure respectful, safe delivery.',
    },
    {
      icon: Instagram,
      title: 'Instagram Delivery',
      description: 'We deliver through beautiful reels, DMs, or posts - whatever works best for your message.',
    },
  ];

  const stats = [
    { value: '2,500+', label: 'Messages Delivered' },
    { value: '95%', label: 'Happy Recipients' },
    { value: '100%', label: 'Privacy Protected' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-emotional"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  We Say It
                  <br />
                  <span className="text-primary">For You</span> 💙
                </h1>
                <p className="text-xl text-muted-foreground max-w-md">
                  Too shy to express your feelings? We'll be your voice. 
                  Anonymous, safe, and straight from the heart.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={() => setIsFormOpen(true)}
                  className="ios-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Share Your Heart
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="ios-button border-border hover:bg-accent px-8 py-4 text-lg"
                >
                  See How It Works
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="floating-animation">
                <img
                  src={heroImage}
                  alt="Express your heart"
                  className="rounded-3xl shadow-2xl w-full max-w-lg mx-auto"
                />
              </div>
              {/* Floating emojis */}
              <div className="absolute -top-4 -right-4 text-4xl animate-pulse">💕</div>
              <div className="absolute bottom-8 -left-4 text-3xl animate-pulse delay-300">✨</div>
              <div className="absolute top-1/2 -right-8 text-3xl animate-pulse delay-700">💙</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Say It For You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We understand that some feelings are hard to express. 
              That's why we've created a safe, caring space for your emotions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={typingIllustration}
                alt="Share your feelings"
                className="rounded-2xl shadow-lg w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Your Feelings Matter 💙
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  We know it's hard to find the right words sometimes. 
                  Maybe you want to apologize but don't know how. 
                  Perhaps there's a confession weighing on your heart.
                </p>
                <p>
                  Whether it's love, gratitude, an apology, or just something 
                  that needs to be said - we're here to help you express it beautifully.
                </p>
              </div>
              
              <div className="bg-accent/30 p-6 rounded-xl">
                <div className="flex items-start space-x-3">
                  <MessageCircle className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      "I finally told my best friend how much they mean to me"
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      - Anonymous user who found their voice through Say It For You
                    </p>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="ios-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
              >
                <Heart className="h-5 w-5 mr-2" />
                Start Expressing Yourself
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Shield className="h-12 w-12 text-primary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Your Privacy is Sacred
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              We never share your personal information. Every message is handled with care, 
              respect, and the anonymity you choose. Your trust is our responsibility.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>No Data Selling</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Human Reviewed</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-muted-foreground">
                <Heart className="h-5 w-5 text-primary" />
                <span>Emotional Safety</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer onOpenForm={() => setIsFormOpen(true)} />
      <MessageForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};