import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const cameras = [
  {
    id: 1,
    name: 'IP камера 4K Ultra HD',
    category: 'ip',
    price: '25 990',
    resolution: '4K',
    night: true,
    outdoor: true,
    ptz: false,
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/ef9f698a-2523-46c4-9767-3edd1b986b63.jpg',
    features: ['Разрешение 4K', 'Ночная съемка', 'Защита IP67']
  },
  {
    id: 2,
    name: 'PTZ камера с автослежением',
    category: 'ip',
    price: '45 990',
    resolution: '1080p',
    night: true,
    outdoor: true,
    ptz: true,
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/ef9f698a-2523-46c4-9767-3edd1b986b63.jpg',
    features: ['Поворотная', 'Автослежение', 'Zoom x20']
  },
  {
    id: 3,
    name: 'AHD камера 5MP',
    category: 'ahd',
    price: '8 990',
    resolution: '5MP',
    night: true,
    outdoor: true,
    ptz: false,
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/ef9f698a-2523-46c4-9767-3edd1b986b63.jpg',
    features: ['Разрешение 5MP', 'Ночная съемка', 'Простой монтаж']
  },
  {
    id: 4,
    name: 'Купольная IP камера',
    category: 'ip',
    price: '18 990',
    resolution: '2MP',
    night: true,
    outdoor: false,
    ptz: false,
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/ef9f698a-2523-46c4-9767-3edd1b986b63.jpg',
    features: ['Компактная', 'Ночная съемка', 'Для помещений']
  },
  {
    id: 5,
    name: 'AHD видеорегистратор 8 каналов',
    category: 'recorder',
    price: '15 990',
    resolution: '4K',
    night: false,
    outdoor: false,
    ptz: false,
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/ef9f698a-2523-46c4-9767-3edd1b986b63.jpg',
    features: ['8 каналов', 'Запись 4K', 'HDD до 8TB']
  },
  {
    id: 6,
    name: 'Тепловизионная камера',
    category: 'thermal',
    price: '89 990',
    resolution: '1080p',
    night: true,
    outdoor: true,
    ptz: false,
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/ef9f698a-2523-46c4-9767-3edd1b986b63.jpg',
    features: ['Тепловизор', 'Дальность 500м', 'Детекция людей']
  }
];

const services = [
  {
    icon: 'Camera',
    title: 'Проектирование системы',
    description: 'Разработка индивидуального проекта с учетом специфики объекта'
  },
  {
    icon: 'Settings',
    title: 'Монтаж оборудования',
    description: 'Профессиональная установка камер и видеорегистраторов'
  },
  {
    icon: 'Network',
    title: 'Настройка сети',
    description: 'Конфигурация локальной сети и удаленного доступа'
  },
  {
    icon: 'Wrench',
    title: 'Сервисное обслуживание',
    description: 'Регулярное техническое обслуживание и поддержка 24/7'
  }
];

const projects = [
  {
    title: 'Торговый центр "Галерея"',
    cameras: 42,
    area: '15 000 м²',
    description: 'Комплексная система видеонаблюдения с распознаванием лиц',
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/b24a9104-6cd4-409d-b3d4-10f41c8a6ab6.jpg'
  },
  {
    title: 'Складской комплекс LogiPark',
    cameras: 28,
    area: '8 000 м²',
    description: 'Периметровая охрана с тепловизионными камерами',
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/2aab6af3-c436-4a6e-9c1c-c18d65d29ddd.jpg'
  },
  {
    title: 'Офисный центр "Сити"',
    cameras: 36,
    area: '12 000 м²',
    description: 'Система контроля доступа и видеонаблюдения',
    image: 'https://cdn.poehali.dev/projects/63797c46-fa01-4348-86da-7fd15a4d40fa/files/2aab6af3-c436-4a6e-9c1c-c18d65d29ddd.jpg'
  }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredCameras = cameras.filter(camera => {
    const matchesSearch = camera.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || camera.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b sticky top-0 bg-white/95 backdrop-blur z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={32} className="text-accent" />
              <span className="text-2xl font-bold text-primary">Проект безопасность</span>
            </div>
            <nav className="hidden md:flex gap-8">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Услуги</a>
              <a href="#catalog" className="text-foreground hover:text-accent transition-colors">Каталог</a>
              <a href="#portfolio" className="text-foreground hover:text-accent transition-colors">Портфолио</a>
              <a href="#about" className="text-foreground hover:text-accent transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-accent transition-colors">Контакты</a>
            </nav>
            <Button className="hidden md:flex">
              <Icon name="Phone" size={18} className="mr-2" />
              Заказать звонок
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4" variant="secondary">Профессиональные системы безопасности</Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">
              Надежное видеонаблюдение для дома и бизнеса
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Проектирование, монтаж и обслуживание систем видеонаблюдения любой сложности. 
              Опыт работы более 12 лет, 500+ успешных проектов.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="FileText" size={20} className="mr-2" />
                Скачать каталог
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">12+</div>
              <div className="text-sm opacity-90">лет на рынке</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-90">завершенных проектов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-sm opacity-90">техподдержка</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3 года</div>
              <div className="text-sm opacity-90">гарантии</div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Услуги</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Полный цикл работ</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              От проектирования до обслуживания — всё под ключ
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={24} className="text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Оборудование</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Каталог камер и оборудования</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор профессионального оборудования от ведущих производителей
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Поиск по оборудованию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full"
              />
            </div>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full md:w-auto">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">Все</TabsTrigger>
                <TabsTrigger value="ip">IP</TabsTrigger>
                <TabsTrigger value="ahd">AHD</TabsTrigger>
                <TabsTrigger value="recorder">Регистраторы</TabsTrigger>
                <TabsTrigger value="thermal">Тепловизоры</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCameras.map((camera) => (
              <Card key={camera.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img src={camera.image} alt={camera.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="secondary">{camera.resolution}</Badge>
                    {camera.night && <Badge variant="outline">Ночная съемка</Badge>}
                    {camera.ptz && <Badge variant="outline">PTZ</Badge>}
                  </div>
                  <CardTitle className="text-xl">{camera.name}</CardTitle>
                  <CardDescription>
                    {camera.outdoor ? 'Уличная' : 'Для помещений'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {camera.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="CheckCircle2" size={16} className="text-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="text-2xl font-bold text-primary">{camera.price} ₽</div>
                  <Button>
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {filteredCameras.length === 0 && (
            <div className="text-center py-12">
              <Icon name="SearchX" size={48} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground">Оборудование не найдено</p>
            </div>
          )}
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реализованные проекты видеонаблюдения для бизнеса
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="aspect-video bg-muted overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardTitle className="text-xl mb-3">{project.title}</CardTitle>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Camera" size={16} className="mr-1" />
                      {project.cameras} камер
                    </div>
                    <div className="flex items-center">
                      <Icon name="Maximize" size={16} className="mr-1" />
                      {project.area}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">О компании</Badge>
              <h2 className="text-4xl font-bold mb-4 text-primary">Проект безопасность</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Наша миссия</h3>
                <p className="text-muted-foreground mb-4">
                  Мы создаем надежные системы видеонаблюдения, которые обеспечивают безопасность вашего бизнеса. 
                  Используем только проверенное оборудование и современные технологии.
                </p>
                <p className="text-muted-foreground">
                  Наша команда состоит из сертифицированных специалистов с многолетним опытом 
                  проектирования и монтажа систем безопасности.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Преимущества</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-2 mt-1" />
                    <span>Бесплатный выезд специалиста и составление проекта</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-2 mt-1" />
                    <span>Гарантия на работы и оборудование до 3 лет</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-2 mt-1" />
                    <span>Круглосуточная техническая поддержка</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="CheckCircle2" size={20} className="text-accent mr-2 mt-1" />
                    <span>Сервисное обслуживание и модернизация систем</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4 text-primary">Свяжитесь с нами</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ответим на все вопросы и рассчитаем стоимость проекта
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Телефон</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold">+7 (495) 123-45-67</p>
                  <p className="text-sm text-muted-foreground">Пн-Пт 9:00-18:00</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold">info@securevision.ru</p>
                  <p className="text-sm text-muted-foreground">Ответим в течение часа</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="MapPin" size={24} className="text-accent" />
                  </div>
                  <CardTitle>Адрес</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg font-semibold">Москва, ул. Примерная, 123</p>
                  <p className="text-sm text-muted-foreground">Офис 301</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="Ваше имя" />
                    <Input placeholder="Телефон" type="tel" />
                  </div>
                  <Input placeholder="Email" type="email" />
                  <Input placeholder="Компания" />
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Shield" size={28} />
                <span className="text-xl font-bold">Проект безопасность</span>
              </div>
              <p className="text-sm opacity-90">
                Профессиональные системы видеонаблюдения для вашего бизнеса
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>Проектирование</li>
                <li>Монтаж</li>
                <li>Настройка</li>
                <li>Обслуживание</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>IP камеры</li>
                <li>AHD камеры</li>
                <li>Видеорегистраторы</li>
                <li>Тепловизоры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>+7 (495) 123-45-67</li>
                <li>info@securevision.ru</li>
                <li>Москва, ул. Примерная, 123</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-90">
            <p>© 2024 Проект безопасность. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}