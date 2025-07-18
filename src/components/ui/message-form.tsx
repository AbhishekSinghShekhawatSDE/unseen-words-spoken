import React, { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Textarea } from './textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Checkbox } from './checkbox';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Heart, Send, Shield, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface MessageFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MessageForm: React.FC<MessageFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    senderHandle: '',
    recipientHandle: '',
    message: '',
    messageType: '',
    isAnonymous: false,
    hasConsent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const messageTypes = [
    'Confession 💕',
    'Apology 🙏',
    'Appreciation 🫶',
    'Social Message 💭',
    'Family 👨‍👩‍👧‍👦',
    'Friendship 👫',
    'Something Unsaid 💙',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.recipientHandle || !formData.message || !formData.messageType || !formData.hasConsent) {
      toast({
        title: "Please fill all required fields",
        description: "Make sure to provide recipient's handle, your message, message type, and consent.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Here you would integrate with Google Apps Script
      // For now, we'll simulate the submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent! 💙",
        description: "Your heartfelt message is on its way. We'll handle it with care.",
      });
      
      setFormData({
        senderHandle: '',
        recipientHandle: '',
        message: '',
        messageType: '',
        isAnonymous: false,
        hasConsent: false,
      });
      onClose();
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again. Your feelings matter to us.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <Card className="w-full max-w-lg max-h-[90vh] overflow-y-auto glass-effect border-0 shadow-2xl fade-in-up">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-between">
            <Heart className="h-6 w-6 text-primary" />
            <CardTitle className="text-xl font-semibold text-foreground">
              Share Your Heart
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0 hover:bg-accent"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            We'll say it for you with love and care 💙
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Instagram Handle <span className="text-muted-foreground">(optional)</span>
                </label>
                <Input
                  placeholder="@yourhandle"
                  value={formData.senderHandle}
                  onChange={(e) => setFormData({ ...formData, senderHandle: e.target.value })}
                  className="border-border focus:ring-primary"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Leave empty if you want to stay completely anonymous
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Recipient's Instagram Handle <span className="text-destructive">*</span>
                </label>
                <Input
                  placeholder="@theirhandle"
                  value={formData.recipientHandle}
                  onChange={(e) => setFormData({ ...formData, recipientHandle: e.target.value })}
                  className="border-border focus:ring-primary"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message Type <span className="text-destructive">*</span>
                </label>
                <Select onValueChange={(value) => setFormData({ ...formData, messageType: value })}>
                  <SelectTrigger className="border-border">
                    <SelectValue placeholder="Choose what you want to say..." />
                  </SelectTrigger>
                  <SelectContent>
                    {messageTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Your Message <span className="text-destructive">*</span>
                </label>
                <Textarea
                  placeholder="Share what's in your heart... We'll make sure they feel it. ✨"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-border focus:ring-primary min-h-[120px] resize-none"
                  maxLength={500}
                  required
                />
                <p className="text-xs text-muted-foreground mt-1">
                  {formData.message.length}/500 characters
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onCheckedChange={(checked) => setFormData({ ...formData, isAnonymous: checked as boolean })}
                />
                <label htmlFor="anonymous" className="text-sm text-foreground">
                  Keep me anonymous in the delivery
                </label>
              </div>

              <div className="flex items-start space-x-2 p-4 bg-accent/30 rounded-lg">
                <Checkbox
                  id="consent"
                  checked={formData.hasConsent}
                  onCheckedChange={(checked) => setFormData({ ...formData, hasConsent: checked as boolean })}
                  required
                />
                <div className="flex-1">
                  <label htmlFor="consent" className="text-sm text-foreground">
                    I consent to having my message shared through Say It For You's platform
                  </label>
                  <p className="text-xs text-muted-foreground mt-1">
                    <Shield className="inline h-3 w-3 mr-1" />
                    Your privacy is our priority. We never share personal data.
                  </p>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full ios-button bg-primary hover:bg-primary/90 text-primary-foreground"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
                  <span>Sending with Love...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <Send className="h-4 w-4" />
                  <span>Send My Message 💙</span>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};