import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, MessageCircle, Instagram, Shield, Send, Star, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { MessageForm } from '@/components/ui/message-form';

export const HowItWorks: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const steps = [
    {
      step: 1,
      icon: Heart,
      title: 'Share Your Heart',
      description: 'Fill out our simple, secure form with your message and recipient details. Choose to stay anonymous or reveal your identity.',
      details: ['Your Instagram handle (optional)', 'Recipient\'s Instagram handle', 'Your heartfelt message', 'Message type & privacy preferences']
    },
    {
      step: 2,
      icon: Shield,
      title: 'We Review With Care',
      description: 'Our team reviews your message to ensure it\'s respectful and safe. We handle every emotion with the care it deserves.',
      details: ['Human-reviewed process', 'Respectful content verification', 'Safety and privacy checks', 'Emotional sensitivity review']
    },
    {
      step: 3,
      icon: Instagram,
      title: 'Beautiful Delivery',
      description: 'We create a beautiful Instagram reel, post, or send a private DM to deliver your message in the most touching way possible.',
      details: ['Instagram Reels with music & visuals', 'Private DM delivery option', 'Tagged posts for visibility', 'Custom creative presentation']
    },
    {
      step: 4,
      icon: Star,
      title: 'Hearts Connected',
      description: 'Your message reaches its destination. Whether it\'s love, apology, or gratitude - real emotions create real connections.',
      details: ['Message delivered with love', 'Recipient feels the emotion', 'Anonymous or revealed identity', 'Real human connections made']
    }
  ];

  const messageTypes = [
    { emoji: '💕', type: 'Love Confessions', description: 'Tell someone how you really feel' },
    { emoji: '🙏', type: 'Apologies', description: 'Make things right with heartfelt words' },
    { emoji: '🫶', type: 'Appreciation', description: 'Show gratitude to those who matter' },
    { emoji: '👨‍👩‍👧‍👦', type: 'Family Messages', description: 'Express love to family members' },
    { emoji: '👫', type: 'Friendship', description: 'Strengthen bonds with friends' },
    { emoji: '💭', type: 'Social Messages', description: 'Address social issues or observations' },
    { emoji: '💙', type: 'Something Unsaid', description: 'Anything weighing on your heart' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 gradient-emotional">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How Say It For You Works
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            From your heart to theirs - here's how we help you express what matters most. 
            Simple, safe, and always with love. 💙
          </p>
          <Button
            size="lg"
            onClick={() => setIsFormOpen(true)}
            className="ios-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
          >
            <Heart className="h-5 w-5 mr-2" />
            Try It Now - It's Free
          </Button>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.step} className="relative">
                {/* Connecting Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-24 bg-gradient-to-b from-primary to-accent hidden md:block"></div>
                )}
                
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16 ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                  <Card className={`border-border hover:shadow-lg transition-all duration-300 fade-in-up ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-primary mb-1">Step {step.step}</div>
                          <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 text-lg">
                        {step.description}
                      </p>
                      
                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className={`text-center ${index % 2 === 1 ? 'md:col-start-1' : ''}`}>
                    <div className="text-6xl md:text-8xl opacity-20 font-bold text-primary">
                      {step.step}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message Types Section */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Can You Express?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whatever's in your heart, we can help you say it. Here are some of the most common types of messages we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {messageTypes.map((type, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-all duration-300 fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{type.emoji}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {type.type}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {type.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Safety, Our Priority
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Shield className="h-5 w-5 text-primary mr-2" />
                    Privacy Protection
                  </h4>
                  <p className="text-muted-foreground">
                    We never share your personal information. Your anonymity is completely protected if you choose it.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Heart className="h-5 w-5 text-primary mr-2" />
                    Human Review
                  </h4>
                  <p className="text-muted-foreground">
                    Every message is reviewed by real humans who understand emotions, not automated systems.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <MessageCircle className="h-5 w-5 text-primary mr-2" />
                    Respectful Delivery
                  </h4>
                  <p className="text-muted-foreground">
                    We ensure all messages are delivered respectfully and safely, creating positive connections.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center">
                    <Star className="h-5 w-5 text-primary mr-2" />
                    No Harmful Content
                  </h4>
                  <p className="text-muted-foreground">
                    We don't deliver harmful, abusive, or inappropriate messages. Only positive emotions allowed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-emotional">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Express Your Heart?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't let another day pass with words left unsaid. 
            Let us help you share what's in your heart. It's free, safe, and always handled with love.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => setIsFormOpen(true)}
              className="ios-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4"
            >
              <Send className="h-5 w-5 mr-2" />
              Send Your Message Now
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="ios-button border-border hover:bg-accent px-8 py-4"
            >
              <Instagram className="h-5 w-5 mr-2" />
              See Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenForm={() => setIsFormOpen(true)} />
      <MessageForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};