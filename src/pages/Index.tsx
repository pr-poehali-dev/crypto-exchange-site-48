import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [fromCurrency, setFromCurrency] = useState('BTC');
  const [toCurrency, setToCurrency] = useState('USDT');
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');

  const currencies = [
    { code: 'BTC', name: 'Bitcoin', rate: 45000, color: '#F7931A' },
    { code: 'ETH', name: 'Ethereum', rate: 3200, color: '#627EEA' },
    { code: 'USDT', name: 'Tether', rate: 1, color: '#26A17B' },
    { code: 'RUB', name: 'Рубль', rate: 0.011, color: '#1E40AF' },
    { code: 'USD', name: 'Доллар', rate: 1, color: '#059669' }
  ];

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const reviews = [
    {
      name: 'Александр М.',
      rating: 5,
      text: 'Быстрый и надежный обмен. Пользуюсь уже полгода, никаких проблем.',
      date: '2 дня назад'
    },
    {
      name: 'Мария К.',
      rating: 5,
      text: 'Отличные курсы и моментальные переводы. Рекомендую всем!',
      date: '1 неделю назад'
    },
    {
      name: 'Дмитрий В.',
      rating: 4,
      text: 'Удобный интерфейс, всё понятно даже новичку. Комиссии минимальные.',
      date: '2 недели назад'
    }
  ];

  const steps = [
    {
      icon: 'Coins',
      title: 'Выберите валюты',
      description: 'Укажите, что хотите обменять и что получить'
    },
    {
      icon: 'Calculator',
      title: 'Введите сумму',
      description: 'Система автоматически рассчитает курс обмена'
    },
    {
      icon: 'Send',
      title: 'Отправьте средства',
      description: 'Переведите криптовалюту на указанный адрес'
    },
    {
      icon: 'CheckCircle',
      title: 'Получите результат',
      description: 'Обмен завершен, средства поступят на ваш кошелек'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Icon name="Coins" className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Coin48</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#exchange" className="text-gray-600 hover:text-blue-600 transition-colors">Обмен</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">Как это работает</a>
              <a href="#reviews" className="text-gray-600 hover:text-blue-600 transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="HeadphonesIcon" size={18} className="mr-2" />
              Поддержка
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Надежный обмен <span className="text-blue-600">криптовалют</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Быстрый и безопасный обмен Bitcoin, Ethereum, USDT без регистрации. 
              Лучшие курсы, многоуровневая защита и поддержка 24/7.
            </p>
            <div className="flex justify-center space-x-4 mb-12">
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Shield" size={16} className="mr-2" />
                Без регистрации
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Zap" size={16} className="mr-2" />
                Быстро
              </Badge>
              <Badge variant="secondary" className="text-sm px-4 py-2">
                <Icon name="Lock" size={16} className="mr-2" />
                Безопасно
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Section */}
      <section id="exchange" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Обменник</h3>
            <p className="text-gray-600">Обменивайте криптовалюты по лучшему курсу</p>
          </div>
          
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-center">Обмен валют</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Отдаете</label>
                  <div className="flex space-x-2">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={fromAmount}
                      onChange={(e) => setFromAmount(e.target.value)}
                      className="flex-1"
                    />
                    <Select value={fromCurrency} onValueChange={setFromCurrency}>
                      <SelectTrigger className="w-28">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Получаете</label>
                  <div className="flex space-x-2">
                    <Input
                      type="number"
                      placeholder="0.00"
                      value={toAmount}
                      onChange={(e) => setToAmount(e.target.value)}
                      className="flex-1"
                    />
                    <Select value={toCurrency} onValueChange={setToCurrency}>
                      <SelectTrigger className="w-28">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {currencies.map((currency) => (
                          <SelectItem key={currency.code} value={currency.code}>
                            {currency.code}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Button
                  variant="outline"
                  onClick={handleSwap}
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <Icon name="ArrowUpDown" size={20} />
                </Button>
              </div>

              <div className="text-center space-y-4">
                <div className="text-sm text-gray-600">
                  Курс: 1 {fromCurrency} = {currencies.find(c => c.code === fromCurrency)?.rate} {toCurrency}
                </div>
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Начать обмен
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Как это работает</h3>
            <p className="text-gray-600">4 простых шага для быстрого обмена</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={24} className="text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Shield" size={24} className="text-green-600" />
                <span className="text-gray-700">Многоуровневая защита</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="CreditCard" size={24} className="text-blue-600" />
                <span className="text-gray-700">Безналичная оплата</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Icon name="Banknote" size={24} className="text-orange-600" />
                <span className="text-gray-700">Наличные операции</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Отзывы клиентов</h3>
            <p className="text-gray-600">Что говорят о нас наши пользователи</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={20} className="text-blue-600" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-semibold text-gray-900">{review.name}</h4>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{review.text}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10,000+</div>
                <p className="text-gray-600">Довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <p className="text-gray-600">Время работы</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2 мин</div>
                <p className="text-gray-600">Среднее время обмена</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h3>
            <p className="text-gray-600">Мы всегда готовы помочь вам</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MessageCircle" size={24} className="text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Онлайн-чат</h4>
                      <p className="text-gray-600">Круглосуточно</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={24} className="text-green-600" />
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-gray-600">support@coin48.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={24} className="text-orange-600" />
                    <div>
                      <h4 className="font-semibold">Телефон</h4>
                      <p className="text-gray-600">+7 (800) 123-45-67</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-4">Напишите нам</h4>
                <div className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Email" type="email" />
                  <textarea
                    className="w-full p-3 border border-gray-300 rounded-md resize-none h-24"
                    placeholder="Ваше сообщение"
                  />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить сообщение
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Icon name="Coins" className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-bold">Coin48</h4>
              </div>
              <p className="text-gray-400">Надежный обмен криптовалют с 2019 года</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Услуги</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Обмен Bitcoin</li>
                <li>Обмен Ethereum</li>
                <li>Обмен USDT</li>
                <li>Наличные операции</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Информация</h5>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Курсы валют</li>
                <li>Безопасность</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li>Часто задаваемые вопросы</li>
                <li>Техподдержка</li>
                <li>Условия использования</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Coin48. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}