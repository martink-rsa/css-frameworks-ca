const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginBtn.addEventListener('click', () => {
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
  loginBtn.classList.add(
    'text-red-600',
    'dark:text-red-400',
    'border-b-2',
    'border-red-600',
    'dark:border-red-400',
  );
  loginBtn.classList.remove('text-gray-500', 'dark:text-gray-400');
  registerBtn.classList.remove(
    'text-red-600',
    'dark:text-red-400',
    'border-b-2',
    'border-red-600',
    'dark:border-red-400',
  );
  registerBtn.classList.add('text-gray-500', 'dark:text-gray-400');
});

registerBtn.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  registerForm.classList.remove('hidden');
  registerBtn.classList.add(
    'text-red-600',
    'dark:text-red-400',
    'border-b-2',
    'border-red-600',
    'dark:border-red-400',
  );
  registerBtn.classList.remove('text-gray-500', 'dark:text-gray-400');
  loginBtn.classList.remove(
    'text-red-600',
    'dark:text-red-400',
    'border-b-2',
    'border-red-600',
    'dark:border-red-400',
  );
  loginBtn.classList.add('text-gray-500', 'dark:text-gray-400');
});
