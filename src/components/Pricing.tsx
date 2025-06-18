import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  const ranks = [
    {
      name: "Bronze → Silver",
      price: 500,
      time: "1-2 дня",
      popular: false,
      features: [
        "Безопасная прокачка",
        "Гарантия результата",
        "Поддержка 24/7",
      ],
    },
    {
      name: "Gold → Platinum",
      price: 1200,
      time: "2-3 дня",
      popular: true,
      features: [
        "Быстрое выполнение",
        "Профи игроки",
        "Бонусные награды",
        "Приоритет в очереди",
      ],
    },
    {
      name: "Diamond → Crown",
      price: 2500,
      time: "3-5 дней",
      popular: false,
      features: [
        "Топ игроки",
        "Максимальная безопасность",
        "Индивидуальный подход",
        "Статистика игр",
      ],
    },
    {
      name: "Crown → Ace",
      price: 4000,
      time: "5-7 дней",
      popular: false,
      features: [
        "Элитные игроки",
        "Премиум поддержка",
        "Детальный отчет",
        "Консультации по игре",
      ],
    },
  ];

  const rpBoost = [
    { level: "RP 1-50", price: 800, time: "3-4 дня" },
    { level: "RP 50-100", price: 1500, time: "5-7 дней" },
    { level: "RP Полный", price: 2200, time: "7-10 дней" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-5xl mb-6 text-foreground">
            Цены на Буст
          </h2>
          <p className="font-roboto text-xl text-muted-foreground max-w-2xl mx-auto">
            Прозрачная ценовая политика. Оплата сразу после заказа.
          </p>
        </div>

        {/* Классический буст */}
        <div className="mb-16">
          <h3 className="font-montserrat font-bold text-3xl text-center mb-8 text-foreground">
            Классический Буст Рангов
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ranks.map((rank, index) => (
              <Card
                key={index}
                className={`relative border-border hover:border-primary/50 transition-all duration-300 ${rank.popular ? "border-primary scale-105" : ""}`}
              >
                {rank.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground font-montserrat font-semibold">
                    Популярно
                  </Badge>
                )}

                <CardHeader className="text-center">
                  <CardTitle className="font-montserrat font-bold text-xl mb-2">
                    {rank.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-black text-primary">
                      {rank.price}
                    </span>
                    <span className="text-muted-foreground ml-1">₽</span>
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="font-roboto">{rank.time}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {rank.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center font-roboto text-sm"
                      >
                        <Icon
                          name="Check"
                          size={14}
                          className="text-primary mr-2 flex-shrink-0"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full font-montserrat font-semibold ${rank.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"}`}
                  >
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* RP Буст */}
        <div>
          <h3 className="font-montserrat font-bold text-3xl text-center mb-8 text-foreground">
            Royale Pass Буст
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {rpBoost.map((rp, index) => (
              <Card
                key={index}
                className="border-border hover:border-secondary/50 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                    <Icon name="Crown" size={32} className="text-white" />
                  </div>
                  <CardTitle className="font-montserrat font-bold text-xl mb-2">
                    {rp.level}
                  </CardTitle>
                  <div className="mb-2">
                    <span className="text-3xl font-black text-secondary">
                      {rp.price}
                    </span>
                    <span className="text-muted-foreground ml-1">₽</span>
                  </div>
                  <div className="flex items-center justify-center text-muted-foreground">
                    <Icon name="Clock" size={16} className="mr-2" />
                    <span className="font-roboto">{rp.time}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <Button className="w-full bg-secondary hover:bg-secondary/90 font-montserrat font-semibold">
                    Заказать RP
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg p-8 max-w-3xl mx-auto">
            <Icon
              name="CreditCard"
              size={48}
              className="mx-auto mb-4 text-primary"
            />
            <h3 className="font-montserrat font-bold text-2xl mb-4">
              Быстрая оплата
            </h3>
            <p className="font-roboto text-lg text-muted-foreground">
              Принимаем все популярные способы оплаты. Оплата производится сразу
              после оформления заказа.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
