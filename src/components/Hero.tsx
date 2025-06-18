import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pubg-dark via-background to-muted flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl">⚡</div>
        <div className="absolute top-32 right-20 text-4xl">🎯</div>
        <div className="absolute bottom-20 left-20 text-5xl">🏆</div>
        <div className="absolute bottom-32 right-32 text-3xl">💀</div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="font-montserrat font-black text-6xl md:text-8xl mb-6 text-foreground">
            PUBG MOBILE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              BOOST
            </span>
          </h1>

          <p className="font-roboto text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Профессиональная прокачка рангов в режимах соло и дуо. Быстро,
            безопасно, с гарантией результата.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-montserrat font-bold text-lg px-8 py-4 animate-scale-in"
            >
              <Icon name="Zap" className="mr-2" />
              Заказать буст
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="font-montserrat font-semibold text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Связаться
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-fade-in">
              <Icon
                name="Shield"
                className="mx-auto mb-4 text-primary"
                size={32}
              />
              <h3 className="font-montserrat font-bold text-lg mb-2">
                100% Безопасно
              </h3>
              <p className="font-roboto text-muted-foreground">
                Без риска блокировки аккаунта
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-fade-in">
              <Icon
                name="Clock"
                className="mx-auto mb-4 text-primary"
                size={32}
              />
              <h3 className="font-montserrat font-bold text-lg mb-2">Быстро</h3>
              <p className="font-roboto text-muted-foreground">
                Результат уже через 24 часа
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 animate-fade-in">
              <Icon
                name="Star"
                className="mx-auto mb-4 text-primary"
                size={32}
              />
              <h3 className="font-montserrat font-bold text-lg mb-2">
                Качество
              </h3>
              <p className="font-roboto text-muted-foreground">
                Профессиональные игроки
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
