# 🔗 Encurtador de URLs

Um aplicativo web simples para encurtar URLs construído com Flask e SQLite.

## 📋 Funcionalidades

- Encurtamento de URLs longas para versões mais curtas
- Interface web amigável e responsiva
- Armazenamento persistente em banco de dados SQLite

## 🚀 Tecnologias Utilizadas

- Python 3
- Flask (Framework Web)
- SQLAlchemy (ORM)
- SQLite (Banco de Dados)
- HTML/CSS
- JavaScript

## 💻 Pré-requisitos

- Python 3.x
- pip (gerenciador de pacotes Python)

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone https://seu-repositorio/url-shortener.git
cd url-shortener
```

2. Instale as dependências:
```bash
pip install flask flask-sqlalchemy
```

3. Execute a aplicação:
```bash
python app.py
```

4. Acesse no navegador:
```
http://localhost:5000
```

## 📝 Como Usar

1. Abra o aplicativo no navegador
2. Cole a URL longa que deseja encurtar
3. Clique no botão "Encurtar"
4. Copie e use a URL curta gerada

## 🗄️ Estrutura do Projeto

```
├── app.py              # Aplicação Flask principal
├── instance/           
│   └── database.db     # Banco de dados SQLite
├── static/
│   ├── script.js       # JavaScript do frontend
│   └── styles.css      # Estilos CSS
└── templates/
    └── index.html      # Template HTML principal
```

