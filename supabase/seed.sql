-- Seed data for 5 initial users
-- Note: These are profiles in the public.users table. 
-- To log in, these users must also exist in Supabase Auth.

INSERT INTO users (name, login, password_hash, role) VALUES
('Александр (Admin)', 'admin', 'pbkdf2:sha256:250000$mock_hash_1', 'admin'),
('Мария (Manager)', 'manager1', 'pbkdf2:sha256:250000$mock_hash_2', 'user'),
('Иван (Sales)', 'sales1', 'pbkdf2:sha256:250000$mock_hash_3', 'user'),
('Дмитрий (Logistics)', 'logistics', 'pbkdf2:sha256:250000$mock_hash_4', 'user'),
('Елена (Support)', 'support', 'pbkdf2:sha256:250000$mock_hash_5', 'user')
ON CONFLICT (login) DO NOTHING;
