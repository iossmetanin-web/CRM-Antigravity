-- CRM Operating System Database Schema
-- Database: PostgreSQL

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- USERS TABLE
CREATE TYPE user_role AS ENUM ('admin', 'user');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    login TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role user_role DEFAULT 'user',
    avatar_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TOPICS TABLE
CREATE TYPE topic_type AS ENUM ('trading', 'mediation', 'service', 'logistics');
CREATE TYPE topic_status AS ENUM ('idea', 'negotiation', 'contract', 'execution', 'closed');

CREATE TABLE topics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title TEXT NOT NULL,
    description TEXT,
    type topic_type NOT NULL,
    volume NUMERIC,
    status topic_status DEFAULT 'idea',
    created_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CLIENTS TABLE
CREATE TABLE clients (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    company TEXT NOT NULL,
    inn TEXT UNIQUE,
    city TEXT,
    phone TEXT UNIQUE,
    email TEXT,
    comment TEXT,
    owner_user UUID REFERENCES users(id) ON DELETE SET NULL,
    source TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CONTACTS TABLE
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    position TEXT,
    phone TEXT,
    telegram TEXT,
    email TEXT,
    comment TEXT
);

-- DEALS TABLE
CREATE TYPE deal_status AS ENUM ('lead', 'negotiation', 'contract', 'payment', 'closed');

CREATE TABLE deals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    client_id UUID REFERENCES clients(id) ON DELETE CASCADE,
    product TEXT NOT NULL,
    volume NUMERIC,
    price TEXT,
    margin NUMERIC,
    status deal_status DEFAULT 'lead',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TASKS TABLE
CREATE TYPE task_priority AS ENUM ('low', 'medium', 'high', 'urgent');
CREATE TYPE task_status AS ENUM ('new', 'in_progress', 'waiting', 'completed', 'cancelled', 'overdue');

CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    creator_id UUID REFERENCES users(id) ON DELETE SET NULL,
    responsible_id UUID REFERENCES users(id) ON DELETE SET NULL,
    deadline TIMESTAMPTZ,
    priority task_priority DEFAULT 'medium',
    status task_status DEFAULT 'new',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TASK MEMBERS TABLE (For many-to-many participants)
CREATE TABLE task_members (
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    PRIMARY KEY (task_id, user_id)
);

-- COMMENTS TABLE
CREATE TABLE comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    text TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- CHATS TABLE
CREATE TYPE chat_type AS ENUM ('general', 'private', 'topic');

CREATE TABLE chats (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    type chat_type NOT NULL,
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- MESSAGES TABLE
CREATE TABLE messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    chat_id UUID REFERENCES chats(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id) ON DELETE SET NULL,
    text TEXT,
    file_url TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- FILES TABLE
CREATE TABLE files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    topic_id UUID REFERENCES topics(id) ON DELETE CASCADE,
    task_id UUID REFERENCES tasks(id) ON DELETE CASCADE,
    url TEXT NOT NULL,
    uploaded_by UUID REFERENCES users(id) ON DELETE SET NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- INDEXES for performance
CREATE INDEX idx_tasks_responsible ON tasks(responsible_id);
CREATE INDEX idx_tasks_deadline ON tasks(deadline);
CREATE INDEX idx_deals_topic ON deals(topic_id);
CREATE INDEX idx_clients_inn ON clients(inn);
CREATE INDEX idx_clients_phone ON clients(phone);
