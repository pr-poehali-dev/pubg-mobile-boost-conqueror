import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Services = () => {
  const services = [
    {
      title: "Классика Соло",
      description: "Прокачка ранга в классическом режиме соло",
      features: ["Любой ранг", "Быстрое выполнение", "Гарантия результата"],
      icon: "User",
      gradient: "from-primary to-orange-600",
    },
    {
      title: "Классика Дуо",
      description: "Прокачка ранга в режиме дуо с напарником",
      features: ["Командная игра", "Профи игроки", "Высокий винрейт"],
      icon: "Users",
      gradient: "from-secondary to-green-600",
    },
    {
      title: "RP Буст",
      description: "Быстрое повышение уровня Royale Pass",
      features: ["Все награды", "Максимальный опыт", "Быстрый прогресс"],
      icon: "Trophy",
      gradient: "from-purple-600 to-pink-600",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-5xl mb-6 text-foreground">
            Наши Услуги
          </h2>
          <p className="font-roboto text-xl text-muted-foreground max-w-2xl mx-auto">
            Выберите подходящий тип буста для вашего аккаунта
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}
                >
                  <Icon
                    name={service.icon as any}
                    size={32}
                    className="text-white"
                  />
                </div>
                <CardTitle className="font-montserrat font-bold text-2xl mb-2">
                  {service.title}
                </CardTitle>
                <p className="font-roboto text-muted-foreground">
                  {service.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center font-roboto">
                      <Icon
                        name="Check"
                        size={16}
                        className="text-primary mr-3 flex-shrink-0"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-primary hover:bg-primary/90 font-montserrat font-semibold group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-600">
                  Заказать сейчас
                  <Icon name="ArrowRight" size={16} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 rounded-lg p-8 max-w-4xl mx-auto">
            <Icon name="Gift" size={48} className="mx-auto mb-4 text-primary" />
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Бонусная программа 🎁
            </h3>
            <p className="font-roboto text-lg text-muted-foreground">
              Каждый 10-й заказ получает{" "}
              <span className="text-primary font-semibold">
                бесплатный бонус
              </span>{" "}
              на свой аккаунт!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
