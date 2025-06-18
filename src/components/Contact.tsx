import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  const contactMethods = [
    {
      name: "Telegram",
      value: "@pubg_boost_pro",
      icon: "MessageCircle",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "WhatsApp",
      value: "+7 (999) 123-45-67",
      icon: "Phone",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Discord",
      value: "PUBGBoost#1337",
      icon: "Hash",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-black text-5xl mb-6 text-foreground">
            Связаться с нами
          </h2>
          <p className="font-roboto text-xl text-muted-foreground max-w-2xl mx-auto">
            Готовы начать? Свяжитесь с нами любым удобным способом
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Контактная информация */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl mb-8 text-foreground">
              Способы связи
            </h3>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon
                          name={method.icon as any}
                          size={24}
                          className="text-white"
                        />
                      </div>
                      <div>
                        <h4 className="font-montserrat font-semibold text-lg">
                          {method.name}
                        </h4>
                        <p className="font-roboto text-muted-foreground">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-card border border-border rounded-lg p-6">
              <h4 className="font-montserrat font-bold text-lg mb-4 flex items-center">
                <Icon name="Info" className="mr-2 text-primary" />
                Важная информация
              </h4>
              <ul className="space-y-2 font-roboto text-muted-foreground">
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-2 mt-1 text-primary flex-shrink-0"
                  />
                  Работаем 24/7 без выходных
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-2 mt-1 text-primary flex-shrink-0"
                  />
                  Отвечаем в течение 5 минут
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-2 mt-1 text-primary flex-shrink-0"
                  />
                  Оплата после заказа
                </li>
                <li className="flex items-start">
                  <Icon
                    name="Check"
                    size={16}
                    className="mr-2 mt-1 text-primary flex-shrink-0"
                  />
                  Гарантия на все услуги
                </li>
              </ul>
            </div>
          </div>

          {/* Форма обратной связи */}
          <div>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="font-montserrat font-bold text-2xl text-center">
                  Быстрый заказ
                </CardTitle>
                <p className="font-roboto text-muted-foreground text-center">
                  Оставьте заявку и мы свяжемся с вами в течение 5 минут
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <label className="font-roboto font-medium text-sm mb-2 block">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Введите ваше имя"
                    className="font-roboto"
                  />
                </div>

                <div>
                  <label className="font-roboto font-medium text-sm mb-2 block">
                    Контакт для связи
                  </label>
                  <Input
                    placeholder="Telegram, WhatsApp или Discord"
                    className="font-roboto"
                  />
                </div>

                <div>
                  <label className="font-roboto font-medium text-sm mb-2 block">
                    Тип услуги
                  </label>
                  <Input
                    placeholder="Например: Буст до Platinum"
                    className="font-roboto"
                  />
                </div>

                <div>
                  <label className="font-roboto font-medium text-sm mb-2 block">
                    Дополнительная информация
                  </label>
                  <Textarea
                    placeholder="Текущий ранг, пожелания, вопросы..."
                    className="font-roboto min-h-[100px]"
                  />
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 font-montserrat font-bold text-lg py-6">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>

                <p className="text-xs font-roboto text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
