<template>
  <nav class="luxury-navbar">
  </nav>
</template>





<style scoped>
.luxury-navbar {
  transition: all 0.3s ease;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
}

.navbar-scrolled {
  background: rgba(26, 26, 26, 0.98);
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.7);
}

.navbar-hidden {
  transform: translateY(-100%);
}

.brand-logo {
  display: flex;
  align-items: center;
}

.logo-text {
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(45deg, var(--primary-gold), var(--secondary-gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 2px;
  position: relative;
}

.logo-text::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary-gold), transparent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.5s ease;
}

.logo-text:hover::before {
  transform: scaleX(1);
}

.nav-link-luxury {
  color: var(--white) !important;
  font-weight: 400;
  letter-spacing: 1px;
  position: relative;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem !important;
  margin: 0 0.5rem;
}

.nav-link-luxury::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background: var(--primary-gold);
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link-luxury:hover {
  color: var(--primary-gold) !important;
}

.nav-link-luxury:hover::after {
  width: 80%;
}

.luxury-toggle {
  border: none;
  padding: 0;
  background: transparent;
}

.toggle-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 30px;
  height: 25px;
  position: relative;
}

.toggle-icon span {
  display: block;
  width: 100%;
  height: 3px;
  background: var(--primary-gold);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.toggle-icon.expanded span:nth-child(1) {
  transform: translateY(11px) rotate(45deg);
}

.toggle-icon.expanded span:nth-child(2) {
  opacity: 0;
}

.toggle-icon.expanded span:nth-child(3) {
  transform: translateY(-11px) rotate(-45deg);
}

.menu-btn {
  border: 2px solid var(--primary-gold);
  background: transparent;
  color: var(--primary-gold);
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
}

.menu-btn:hover {
  background: var(--primary-gold);
  color: var(--luxury-black);
  border-color: var(--primary-gold);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
}

@media (max-width: 991px) {
  .luxury-navbar {
    background: rgba(26, 26, 26, 0.98);
  }

  .nav-link-luxury {
    margin: 0.5rem 0;
  }

  .menu-btn {
    margin-top: 1rem;
    width: 100%;
  }
}
</style>
