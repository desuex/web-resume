import {createI18n} from 'vue-i18n'

function getStartingLocale() {

    if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search)
        const locale = params.get('lang')
        if (locale === 'en' || locale === 'ru') {
            return locale
        }
    }
    const saved = typeof window !== 'undefined'
        ? localStorage.getItem('locale')
        : null
    if (saved === 'en' || saved === 'ru') {
        return saved
    }
    const lang = typeof navigator !== 'undefined' ? (navigator.language || navigator.userLanguage || 'en') : 'en'
    if (lang.toLowerCase().startsWith('ru')) {
        return 'ru'
    }
    return 'en'
}

const messages = {
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            contact: 'Contact',
        },
        hero: {
            badge: 'Senior Backend / PHP Engineer',
            name: 'Evgeniy Kuznetsov',
            title: 'Architecting and developing backend for scalable web projects',
            location: 'Karaganda, Kazakhstan (GMT+5) · Remote',
            summary:
                '10+ years in web development. I design fault-tolerant systems using Laravel/Symfony, transform legacy into clean code, and optimize high-load services.',
            primaryCta: 'Download CV',
            secondaryCta: 'Contact Me',
        },
        about: {
            heading: 'About me',
            subtitle: 'Product-minded Backend Engineer',
            paragraph1:
                'I specialize in building scalable PHP applications that meet modern standards for speed, reliability, and security. For the past 5+ years, I have focused on optimizing and evolving microservices in high-load environments (up to 200k RPS).',
            paragraph2:
                'I have a deep understanding of infrastructure and business requirements, architecting solutions with a focus on high performance and end-user experience.',
            listTitle: 'Key Highlights',
            highlights: [
                'Translating business and design requirements into clear technical tasks',
                'Writing clean code, maintaining documentation, and ensuring comprehensive testing at all stages',
                'Owning features end-to-end: from concept and estimation to release and feedback loop',
            ],
            currentlyTitle: 'Currently',
            currentlyText:
                'I am looking for a remote Backend / PHP Developer role in a product team where I can grow, share knowledge, and contribute to a strong developer experience (DX).',
        },
        skills: {
            heading: 'Technical Skills',
            subtitle: 'Modern backend engineering with PHP, Laravel, and Cloud Native practices',

            coreTitle: 'Core Stack',
            backendTitle: 'Backend & API',
            toolingTitle: 'Tools & Code Quality',
            devopsTitle: 'DevOps & Infrastructure',

            core: [
                'PHP 8.2+',
                'Laravel 10 / 11',
                'Symfony 6 (Components)',
                'PostgreSQL / MySQL',
                'Redis',
            ],
            backend: [
                'REST API (JSON:API, RESTful)',
                'Swagger / OpenAPI',
                'RabbitMQ / Laravel Queues',
                'Eloquent ORM / Doctrine',
            ],
            tooling: [
                'Git (Flow / Trunk-based)',
                'Composer / Package Development',
                'PHPStan / Larastan / CS Fixer',
                'PHPUnit / Test Coverage',
                'TDD / CI Integration',
            ],
            devops: [
                'Docker / Docker Compose',
                'Cloud Providers (AWS, DigitalOcean, GCP)',
                'CI/CD Pipelines (GitHub Actions, GitLab CI)',
                'NGINX / Caddy Web Server',
                'Kubernetes (Basics)',
                'Monitoring and Logging (Prometheus/Grafana/Sentry)',
            ],

            keywordsTitle: 'Keywords',
            keywordsText:
                'PHP, Laravel, Symfony, REST API, PostgreSQL, Redis, Docker, Kubernetes, CI/CD, TDD, AWS, High Load, Microservices',
        },
        projects: {
            heading: 'Key Projects',
            subtitle: 'Selected high-load products focusing on scalability and performance',

            items: [
                {
                    id: 'route4me',
                    logoLabel: 'Route4Me',
                    company: 'Route4Me Inc.',
                    role: 'Senior Backend Engineer',
                    period: '2025',
                    location: 'Remote · USA',
                    summary:
                        'Cloud-first SaaS platform for logistics and route optimization. Focused on backend stability, new analytics services, code quality, and infrastructure cost optimization.',
                    details: [
                        'Optimized tracking microservices for stable real-time data stream processing.',
                        'Architected and deployed real-time geo-analytics microservices using a Cloud-native stack (BigQuery, Pub/Sub, DynamoDB).',
                        'Developed a custom Rate Limiting system, significantly reducing cloud infrastructure costs.',
                        'Standardized API documentation (Swagger/OpenAPI) and increased test coverage across an ecosystem of dozens of microservices.',
                        'Ensured smooth migration of the legacy monolith and microservices to modern Laravel versions with zero downtime.',
                    ],
                    stackTitle: 'Tech Stack',
                    stack: [
                        'PHP 8.2 / 7.4',
                        'Laravel 10 / 6',
                        'MySQL',
                        'Redis',
                        'BigQuery / DynamoDB',
                        'Pub/Sub / RabbitMQ',
                        'GCP / AWS',
                    ],
                },
                {
                    id: 'wisebits',
                    logoLabel: 'Wisebits',
                    company: 'Wisebits',
                    role: 'Senior Backend Engineer',
                    period: '2023 — 2025',
                    location: 'Remote · Cyprus (Highload / Streaming)',
                    summary:
                        'International high-load video streaming platform. Focused on content delivery optimization and microservices architecture.',
                    details: [
                        'Maintained and evolved a complex architecture, bridging a Phalcon monolith with Go and Python microservices within a Kubernetes environment.',
                        'Implemented CDN traffic balancing based on Consistent Hashing. This significantly reduced origin server load and eliminated video playback latency.',
                        'Developed an automated A/B testing tool (Node.js/Python) for video encoding parameters, finding the optimal balance between visual quality and file size.',
                        'Optimized high-volume data operations (MySQL, MongoDB, Redis), ensuring strict GDPR compliance and high-performance data access.',
                        'Designed and documented RESTful APIs for internal service communication, streamlining integration for the frontend team.',
                    ],
                    stackTitle: 'Tech Stack',
                    stack: [
                        'PHP (Phalcon)',
                        'Golang',
                        'Python',
                        'Node.js',
                        'MongoDB / MySQL',
                        'Redis',
                        'K8s / Docker',
                        'CDN / Video Streaming',
                    ],
                },
                {
                    id: 'vsemayki',
                    logoLabel: 'VseMayki',
                    company: 'VseMayki.ru',
                    role: 'Senior Backend Developer',
                    period: '2022 — 2023',
                    location: 'Remote (E-commerce / High Load)',
                    summary:
                        'Large-scale Print-on-Demand E-commerce platform. Focused on checkout optimization, payment integrations, and microservices performance.',
                    details: [
                        'Integrated one-click payment solutions (SberPay) and partial cart management features, which directly boosted conversion rates and user retention.',
                        'Refactored and optimized core microservices (PHP/Laravel), improving system maintainability and handling high-traffic spikes during sales seasons.',
                        'Engineered critical features for order processing and logistics, enhancing system stability and reducing customer support incidents.',
                        'Managed complex data flows across multiple database types (MySQL, PostgreSQL, MongoDB) to ensure data integrity in a distributed system.'
                    ],
                    stackTitle: 'Tech Stack',
                    stack: [
                        'PHP 8.1',
                        'Laravel',
                        'MySQL / PostgreSQL',
                        'MongoDB',
                        'Redis',
                        'Docker',
                        'RabbitMQ',
                        'Payment Gateways',
                    ],
                },
                {
                    id: 'amulex',
                    logoLabel: 'Amulex',
                    company: 'National Legal Service (Amulex)',
                    role: 'Senior Web Developer',
                    period: '2019 — 2021',
                    location: 'Russia (LegalTech)',
                    summary:
                        'One of the largest LegalTech companies in Russia. Focused on data aggregation services and core platform modernization.',
                    details: [
                        'Developed an automated data extraction system using Python to scrape legal cases from protected government sources (handling Captchas, WebSockets, and proxies).',
                        'Built a high-performance microservice for traffic fines search using Node.js and MongoDB, capable of handling large datasets.',
                        'Led the refactoring of the legacy monolith (Laravel / Angular), establishing testing standards (PHPUnit) and significantly improving page load speeds.',
                        'Mentored junior developers and conducted code reviews, fostering professional growth and improving team code quality.'
                    ],
                    stackTitle: 'Tech Stack',
                    stack: [
                        'PHP',
                        'Laravel',
                        'Python (Scraping)',
                        'Node.js',
                        'MongoDB',
                        'Angular',
                        'WebSockets',
                    ],
                },
            ],
        },
        contact: {
            heading: 'Contact',
            subtitle: 'Let’s connect',
            emailLabel: 'Email',
            githubLabel: 'GitHub',
            linkedinLabel: 'LinkedIn',
            websiteLabel: 'Website',
            telegramLabel: 'Telegram',
            action: 'Get in touch',
            footer: 'Open to remote roles worldwide',
            email: 'hire@dsxm.org',
            github: 'https://github.com/desuex',
            linkedin: 'https://linkedin.com/in/dsxm',
            website: 'https://dsxm.org',
            telegram: 'https://t.me/dsmexe',
        },
        meta: {
            title: 'Evgeniy Kuznetsov — Backend Developer (PHP)',
            description:
                'Backend engineer with product mindset. Expertise in Laravel, SQL, Microservices and performance optimization.',
        }
    },
    ru: {
        nav: {
            about: 'Обо мне',
            skills: 'Навыки',
            projects: 'Проекты',
            contact: 'Контакты',
        },
        hero: {
            badge: 'Senior Backend / PHP разработчик',
            name: 'Евгений Кузнецов',
            title: 'Разрабатываю архитектуру и бэкенд для масштабируемых веб-проектов',
            location: 'Караганда, Казахстан (GMT+5) · Удалённо',
            summary:
                '10+ лет в веб-разработке. Проектирую отказоустойчивые системы на Laravel/Symfony, превращаю легаси в чистый код и оптимизирую высоконагруженные сервисы.',
            primaryCta: 'Скачать резюме',
            secondaryCta: 'Связаться со мной',
        },
        about: {
            heading: 'Обо мне',
            subtitle: 'Backend-инженер с продуктовым мышлением',
            paragraph1:
                'Я специализируюсь на создании масштабируемых PHP-приложений, отвечающих современным стандартам безопасности и производительности. Последние 5+ лет занимаюсь архитектурой и оптимизацией микросервисов под высокие нагрузки (до 200k RPS).',
            paragraph2:
                'Глубоко понимаю инфраструктуру и влияние бэкенда на бизнес-метрики. Проектирую решения так, чтобы они выдерживали рост трафика и обеспечивали лучший пользовательский опыт.',
            listTitle: 'Ключевые компетенции',
            highlights: [
                'Трансформация бизнес-требований в четкие технические задачи',
                'Написание чистого кода, поддержка документации и выстраивание процессов тестирования',
                'Full-cycle разработка фич: от идеи и оценки сроков до релиза и мониторинга',
            ],
            currentlyTitle: 'Сейчас',
            currentlyText:
                'Ищу удалённую позицию Backend / PHP Developer в продуктовой компании, где ценят качество кода, обмен опытом и развитую инженерную культуру.',
        },
        skills: {
            heading: 'Навыки',
            subtitle: 'Современный backend на PHP, Laravel и Cloud Native практики',

            coreTitle: 'Основной стек',
            backendTitle: 'Backend и API',
            toolingTitle: 'Инструменты и качество кода',
            devopsTitle: 'DevOps и инфраструктура',

            core: [
                'PHP 8.2+',
                'Laravel 10 / 11',
                'Symfony 6 (Components)',
                'PostgreSQL / MySQL',
                'Redis',
            ],
            backend: [
                'REST API (JSON:API, RESTful)',
                'Swagger / OpenAPI',
                'RabbitMQ / Laravel Queues',
                'Eloquent ORM / Doctrine',
            ],
            tooling: [
                'Git (Flow / Trunk-based)',
                'Composer / Разработка пакетов',
                'PHPStan / PHP CS Fixer (Static Analysis)',
                'PHPUnit / Тестовое покрытие',
                'TDD / Code Review',
            ],

            devops: [
                'Docker / Docker Compose',
                'Cloud (AWS, DigitalOcean, GCP)',
                'CI/CD Pipelines (GitHub Actions, GitLab CI)',
                'NGINX / Caddy',
                'Kubernetes (Базовые знания)',
                'Мониторинг и логирование (Prometheus/Grafana/Sentry)',
            ],

            keywordsTitle: 'Ключевые слова',
            keywordsText:
                'PHP, Laravel, Symfony, REST API, PostgreSQL, Redis, Docker, Kubernetes, CI/CD, TDD, High Load, Microservices, AWS, Архитектура',
        },
        projects: {
            heading: 'Проекты',
            subtitle: 'Ключевые продукты: фокус на High Load и сложную бизнес-логику',

            items: [
                {
                    id: 'route4me',
                    logoLabel: 'Route4Me',
                    company: 'Route4Me Inc.',
                    role: 'Senior Backend Engineer',
                    period: '2025',
                    location: 'Удалённо · США',
                    summary:
                        'Cloud-first SaaS-платформа для логистики и оптимизации маршрутов. Отвечал за стабильность бэкенда, новые аналитические сервисы, качество кода и оптимизацию расходов на инфраструктуру.',
                    details: [
                        'Оптимизировал микросервисы трекинга для стабильной обработки потока данных в реальном времени (Real-time tracking).',
                        'Спроектировал и внедрил микросервисы для сбора гео-аналитики в реальном времени, используя Cloud-native стек (BigQuery, Pub/Sub, DynamoDB).',
                        'Разработал систему Rate Limiting, что позволило существенно сократить расходы на инфраструктуру.',
                        'Стандартизировал API-документацию (Swagger/OpenAPI) и повысил тестовое покрытие в экосистеме из десятков микросервисов.',
                        'Обеспечивал плавную миграцию легаси-монолита и микросервисов на современные версии Laravel без остановки бизнес-процессов.'
                    ],
                    stackTitle: 'Стек',
                    stack: [
                        'PHP 8.2 / 7.4',
                        'Laravel 10 / 6',
                        'MySQL',
                        'Redis',
                        'BigQuery / DynamoDB',
                        'Pub/Sub / RabbitMQ',
                        'GCP / AWS',
                    ],
                },

                {
                    id: 'wisebits',
                    logoLabel: 'Wisebits',
                    company: 'Wisebits',
                    role: 'Senior Backend Engineer',
                    period: '2023 — 2025',
                    location: 'Удаленно · Кипр (Highload / Streaming)',
                    summary:
                        'Международная Highload-платформа видеостриминга. Занимался оптимизацией доставки контента и архитектурой микросервисов.',
                    details: [
                        'Поддерживал и развивал сложную архитектуру: от монолита на Phalcon до микросервисов на Go и Python в среде Kubernetes.',
                        'Внедрил балансировку трафика между CDN на базе Consistent Hashing. Это снизило нагрузку на origin-серверы и убрало лаги при просмотре видео.',
                        'Разработал инструмент (Node.js/Python) для автоматического A/B тестирования параметров кодирования видео, найдя баланс между качеством картинки и размером файла.',
                        'Оптимизировал работу с BigData (MySQL, MongoDB, Redis), обеспечив соответствие строгим требованиям GDPR и высокую скорость доступа к данным.',
                        'Спроектировал и задокументировал RESTful API для взаимодействия внутренних сервисов, упростив интеграцию для фронтенд-команды.',
                    ],
                    stackTitle: 'Стек',
                    stack: [
                        'PHP (Phalcon)',
                        'Golang',
                        'Python',
                        'Node.js',
                        'MongoDB / MySQL',
                        'Redis',
                        'K8s / Docker',
                        'CDN / Video Streaming',
                    ],
                },
                {
                    id: 'vsemayki',
                    logoLabel: 'VseMayki',
                    company: 'VseMayki.ru',
                    role: 'Senior Backend Developer',
                    period: '2022 — 2023',
                    location: 'Удаленно (E-commerce / High Load)',
                    summary:
                        'Крупная E-commerce платформа (Print-on-Demand). Занимался оптимизацией чекаута, интеграциями платежей и рефакторингом ядра.',
                    details: [
                        'Внедрил оплату в один клик (SberPay) и функционал управления корзиной, что напрямую увеличило конверсию и удержание пользователей.',
                        'Провел масштабный рефакторинг микросервисов на Laravel, повысив производительность системы и облегчив поддержку кода.',
                        'Разработал ключевые модули для логистики и процессинга заказов, что снизило количество инцидентов и нагрузку на техподдержку.',
                        'Оптимизировал работу с данными в распределенной среде, используя связку MySQL, PostgreSQL и MongoDB под разные типы нагрузок.'
                    ],
                    stackTitle: 'Стек',
                    stack: [
                        'PHP 8.1',
                        'Laravel',
                        'MySQL / PostgreSQL',
                        'MongoDB',
                        'Redis',
                        'Docker',
                        'RabbitMQ',
                        'Payment API',
                    ],
                },
                {
                    id: 'amulex',
                    logoLabel: 'Amulex',
                    company: 'Национальная Юридическая Служба (Amulex)',
                    role: 'Senior Web Developer',
                    period: '2019 — 2021',
                    location: 'Россия (LegalTech)',
                    summary:
                        'Крупный LegalTech-сервис. Занимался агрегацией юридических данных и модернизацией основной платформы.',
                    details: [
                        'Разработал систему автоматического сбора данных об административных делах с защищенных ресурсов (Python, WebSockets, обход капчи).',
                        'Спроектировал и внедрил микросервис поиска штрафов ГИБДД на Node.js и MongoDB, обеспечив высокую скорость обработки запросов.',
                        'Провел масштабный рефакторинг основного продукта (Laravel / Angular), внедрил покрытие тестами и устранил критический технический долг.',
                        'Выстроил процессы менторства и код-ревью, что помогло ускорить профессиональный рост младших разработчиков.'
                    ],
                    stackTitle: 'Стек',
                    stack: [
                        'PHP',
                        'Laravel',
                        'Python (Scraping)',
                        'Node.js',
                        'MongoDB',
                        'Angular',
                        'WebSockets',
                    ],
                },
            ],
        },
        contact: {
            heading: 'Контакты',
            subtitle: 'Буду рад связаться',
            emailLabel: 'Почта',
            githubLabel: 'GitHub',
            linkedinLabel: 'LinkedIn',
            websiteLabel: 'Сайт',
            telegramLabel: 'Telegram',
            action: 'Написать',
            footer: 'Открыт к удалённым предложениям',
            email: 'hire@dsxm.org',
            github: 'https://github.com/desuex',
            linkedin: 'https://linkedin.com/in/dsxm',
            website: 'https://dsxm.org',
            telegram: 'https://t.me/dsmexe',
        },
        meta: {
            title: 'Евгений Кузнецов — Backend разработчик (PHP)',
            description:
                'Backend-инженер с продуктовым подходом. Опыт в PHP, SQL, микросервисах и оптимизации производительности.',
        }
    },
}
export const i18n = createI18n({
    legacy: false,
    locale: getStartingLocale(),
    fallbackLocale: 'en',
    messages
})