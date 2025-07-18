import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Users, Target, Lightbulb, Instagram, MessageCircle, Shield } from 'lucide-react';
import { useState } from 'react';
import { MessageForm } from '@/components/ui/message-form';

export const About: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const values = [
    {
      icon: Heart,
      title: 'Emotional Safety',
      description: 'Every emotion is valid and deserves to be expressed safely, without judgment or fear.'
    },
    {
      icon: Shield,
      title: 'Privacy First',
      description: 'Your personal information is sacred. We protect your privacy like we protect our own.'
    },
    {
      icon: Users,
      title: 'Human Connection',
      description: 'Real relationships are built on authentic emotions, not perfect presentations.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Expression',
      description: 'Every message deserves to be delivered beautifully, with creativity and care.'
    }
  ];

  const teamMembers = [
    {
      role: 'Content Creator',
      description: 'Transforms your words into beautiful, emotional Instagram content',
      emoji: '🎨'
    },
    {
      role: 'Message Reviewer',
      description: 'Ensures every message is safe, respectful, and ready for delivery',
      emoji: '👁️'
    },
    {
      role: 'Community Manager',
      description: 'Manages our Instagram presence and connects with our community',
      emoji: '🤝'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-emotional">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Story Behind Say It For You
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Born from understanding that some of the most important words 
            are often the hardest to say. We're here to be your voice when words fail you. 💙
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Why We Started This
                </h2>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    We've all been there. That moment when you want to say something important, 
                    but the words just won't come out. Maybe it's fear, maybe it's shyness, 
                    or maybe you just can't find the right way to express what's in your heart.
                  </p>
                  <p>
                    Say It For You was born from the simple belief that <strong className="text-foreground">
                    every emotion deserves to be heard</strong>. Whether you're an introvert who struggles 
                    with social expression, someone dealing with social anxiety, or just someone who 
                    wants to say something beautiful but doesn't know how.
                  </p>
                  <p>
                    We noticed that social media is full of surface-level interactions, 
                    but real emotions - the ones that matter - often stay hidden. 
                    That's where we come in.
                  </p>
                </div>
              </div>
              
              <Card className="border-border shadow-lg">
                <CardContent className="p-8">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">💭</div>
                    <h3 className="text-xl font-semibold text-foreground">Our Philosophy</h3>
                    <p className="text-muted-foreground italic">
                      "In a world where everyone posts everything but says nothing real, 
                      we create a space where emotions are expressed without judgment - 
                      with creativity, safety, and intention."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Who We're Here For
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Say It For You is especially created for hearts that feel deeply but struggle to express.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🤐</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Introverts & Shy People
                </h3>
                <p className="text-muted-foreground">
                  Those who feel deeply but find it hard to express emotions in social settings.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">💔</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  People with Regrets
                </h3>
                <p className="text-muted-foreground">
                  Those carrying the weight of unspoken apologies, confessions, or gratitude.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">😰</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Anxiety Warriors
                </h3>
                <p className="text-muted-foreground">
                  People dealing with social anxiety who want to connect but need support.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">💕</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Secret Admirers
                </h3>
                <p className="text-muted-foreground">
                  Those with feelings they want to share but fear direct rejection or judgment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">🙏</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Grateful Hearts
                </h3>
                <p className="text-muted-foreground">
                  People who want to express appreciation but struggle with the right words.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Anyone with Unsaid Words
                </h3>
                <p className="text-muted-foreground">
                  Simply anyone who has something important to say but needs help saying it.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these principles that ensure your emotions are handled with the care they deserve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Small but Caring Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're a small team of 2-3 people who believe in the power of authentic emotional expression. 
              Every message is handled by real humans who understand feelings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-border text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{member.emoji}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {member.role}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {member.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Target className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                To create a world where every emotion finds its voice, 
                where introverted hearts can express themselves freely, 
                and where the fear of judgment never silences genuine feelings again.
              </p>
              <p>
                We believe that unexpressed emotions create invisible wounds. 
                By giving people a safe, creative way to share their hearts, 
                we're not just delivering messages - we're healing relationships, 
                creating connections, and helping people live more authentically.
              </p>
            </div>
            
            <div className="mt-12">
              <Button
                size="lg"
                onClick={() => setIsFormOpen(true)}
                className="ios-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
              >
                <Heart className="h-5 w-5 mr-2" />
                Join Our Mission - Share Your Heart
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-emotional">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Connect With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Have questions? Want to share your story? We'd love to hear from you. 
            Your feedback helps us serve hearts better.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              className="ios-button border-border hover:bg-accent px-8 py-4"
              onClick={() => window.open('https://instagram.com/sayitforyou.fun', '_blank')}
            >
              <Instagram className="h-5 w-5 mr-2" />
              Follow Our Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="ios-button border-border hover:bg-accent px-8 py-4"
              onClick={() => window.open('mailto:hello@sayitforyou.fun')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Say Hello
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenForm={() => setIsFormOpen(true)} />
      <MessageForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};