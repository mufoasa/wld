// ===================================
// WhiteLuckDigital - Main JavaScript
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  initLoader()
  initNavigation()
  initScrollEffects()
  initThemeToggle()
  initPortfolio()
  initContactForm()
  initStats()
  initParallax()
})

// ===================================
// Boot-up Loader
// ===================================
function initLoader() {
  const loader = document.getElementById("loader")

  setTimeout(() => {
    loader.classList.add("hidden")
    // Remove from DOM after transition completes
    setTimeout(() => {
      loader.style.display = "none"
    }, 500)
  }, 1500)
}

// ===================================
// Navigation
// ===================================
function initNavigation() {
  const header = document.getElementById("header")
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")
  const navLinks = document.querySelectorAll(".nav-link")

  // Mobile menu toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    const isExpanded = navMenu.classList.contains("active")
    navToggle.setAttribute("aria-expanded", isExpanded)

    // Toggle icon
    const icon = navToggle.querySelector("i")
    icon.classList.toggle("fa-bars")
    icon.classList.toggle("fa-times")
  })

  // Close mobile menu when clicking a link
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      navToggle.setAttribute("aria-expanded", "false")
      const icon = navToggle.querySelector("i")
      icon.classList.add("fa-bars")
      icon.classList.remove("fa-times")
    })
  })

  // Sticky header on scroll
  let lastScroll = 0
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }

    lastScroll = currentScroll
  })

  // Smooth scroll for anchor links
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = header.offsetHeight
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// ===================================
// Scroll Reveal Effects
// ===================================
function initScrollEffects() {
  const revealElements = document.querySelectorAll(".reveal")

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active")
          // Optionally unobserve after revealing
          // revealObserver.unobserve(entry.target);
        }
      })
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    },
  )

  revealElements.forEach((element) => {
    revealObserver.observe(element)
  })
}

// ===================================
// Theme Toggle
// ===================================
function initThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  const body = document.body
  const icon = themeToggle.querySelector("i")

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme")
  if (savedTheme === "light") {
    body.classList.add("light-theme")
    icon.classList.remove("fa-moon")
    icon.classList.add("fa-sun")
  }

  // Toggle theme
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-theme")

    // Update icon
    if (body.classList.contains("light-theme")) {
      icon.classList.remove("fa-moon")
      icon.classList.add("fa-sun")
      localStorage.setItem("theme", "light")
    } else {
      icon.classList.remove("fa-sun")
      icon.classList.add("fa-moon")
      localStorage.setItem("theme", "dark")
    }
  })
}

// ===================================
// Portfolio Modal
// ===================================
function initPortfolio() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")
  const modal = document.getElementById("portfolio-modal")
  const modalOverlay = modal.querySelector(".modal-overlay")
  const modalClose = modal.querySelector(".modal-close")
  const modalImage = document.getElementById("modal-image")
  const modalTitle = document.getElementById("modal-title")
  const modalCategory = document.getElementById("modal-category")
  const modalDescription = document.getElementById("modal-description")

  // Portfolio data
  const portfolioData = {
    1: {
      title: "Project Alpha",
      category: "AI Dashboard",
      description:
        "A cutting-edge AI-powered dashboard that provides real-time analytics and predictive insights. Built with advanced machine learning algorithms and a sleek, intuitive interface that adapts to user behavior.",
      image: "https://via.placeholder.com/800x600/0a0a0f/00f0ff?text=Project+Alpha",
    },
    2: {
      title: "Neural Network",
      category: "ML Platform",
      description:
        "An enterprise-grade machine learning platform that enables data scientists to build, train, and deploy neural networks at scale. Features automated model optimization and comprehensive visualization tools.",
      image: "https://via.placeholder.com/800x600/0a0a0f/ffd700?text=Neural+Network",
    },
    3: {
      title: "Quantum Interface",
      category: "Holographic UI",
      description:
        "Revolutionary holographic user interface that leverages 3D spatial computing and gesture recognition. Provides an immersive experience that transforms how users interact with digital content.",
      image: "https://via.placeholder.com/800x600/0a0a0f/00bfff?text=Quantum+Interface",
    },
    4: {
      title: "Cyber Shield",
      category: "Security Platform",
      description:
        "Comprehensive cybersecurity platform with AI-driven threat detection, real-time monitoring, and automated response systems. Protects enterprise infrastructure with military-grade encryption and zero-trust architecture.",
      image: "https://via.placeholder.com/800x600/0a0a0f/ff6b6b?text=Cyber+Shield",
    },
  }

  // Open modal
  portfolioItems.forEach((item) => {
    const btn = item.querySelector(".portfolio-btn")
    btn.addEventListener("click", () => {
      const portfolioId = item.getAttribute("data-portfolio")
      const data = portfolioData[portfolioId]

      if (data) {
        modalImage.src = data.image
        modalImage.alt = data.title
        modalTitle.textContent = data.title
        modalCategory.textContent = data.category
        modalDescription.textContent = data.description

        modal.classList.add("active")
        modal.setAttribute("aria-hidden", "false")
        document.body.style.overflow = "hidden"
      }
    })
  })

  // Close modal
  const closeModal = () => {
    modal.classList.remove("active")
    modal.setAttribute("aria-hidden", "true")
    document.body.style.overflow = ""
  }

  modalClose.addEventListener("click", closeModal)
  modalOverlay.addEventListener("click", closeModal)

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal()
    }
  })
}

// ===================================
// Contact Form Validation
// ===================================
function initContactForm() {
  const form = document.getElementById("contact-form")
  const nameInput = document.getElementById("name")
  const emailInput = document.getElementById("email")
  const subjectInput = document.getElementById("subject")
  const messageInput = document.getElementById("message")
  const successMessage = form.querySelector(".form-success")

  // Validation functions
  const validateName = (name) => {
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters long"
    }
    return ""
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address"
    }
    return ""
  }

  const validateSubject = (subject) => {
    if (subject.trim().length < 3) {
      return "Subject must be at least 3 characters long"
    }
    return ""
  }

  const validateMessage = (message) => {
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters long"
    }
    return ""
  }

  // Show error
  const showError = (input, message) => {
    const formGroup = input.parentElement
    const errorElement = formGroup.querySelector(".form-error")
    errorElement.textContent = message
    input.classList.add("error")
  }

  // Clear error
  const clearError = (input) => {
    const formGroup = input.parentElement
    const errorElement = formGroup.querySelector(".form-error")
    errorElement.textContent = ""
    input.classList.remove("error")
  }

  // Real-time validation
  nameInput.addEventListener("blur", () => {
    const error = validateName(nameInput.value)
    if (error) {
      showError(nameInput, error)
    } else {
      clearError(nameInput)
    }
  })

  emailInput.addEventListener("blur", () => {
    const error = validateEmail(emailInput.value)
    if (error) {
      showError(emailInput, error)
    } else {
      clearError(emailInput)
    }
  })

  subjectInput.addEventListener("blur", () => {
    const error = validateSubject(subjectInput.value)
    if (error) {
      showError(subjectInput, error)
    } else {
      clearError(subjectInput)
    }
  })

  messageInput.addEventListener("blur", () => {
    const error = validateMessage(messageInput.value)
    if (error) {
      showError(messageInput, error)
    } else {
      clearError(messageInput)
    }
  })

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Validate all fields
    const nameError = validateName(nameInput.value)
    const emailError = validateEmail(emailInput.value)
    const subjectError = validateSubject(subjectInput.value)
    const messageError = validateMessage(messageInput.value)

    // Show errors if any
    if (nameError) showError(nameInput, nameError)
    if (emailError) showError(emailInput, emailError)
    if (subjectError) showError(subjectInput, subjectError)
    if (messageError) showError(messageInput, messageError)

    // If no errors, simulate submission
    if (!nameError && !emailError && !subjectError && !messageError) {
      // Simulate API call
      const submitBtn = form.querySelector(".btn-submit")
      const originalText = submitBtn.querySelector("span").textContent
      submitBtn.querySelector("span").textContent = "Sending..."
      submitBtn.disabled = true

      setTimeout(() => {
        // Show success message
        successMessage.textContent = "Thank you! Your message has been sent successfully. We'll get back to you soon."
        successMessage.classList.add("active")

        // Reset form
        form.reset()
        submitBtn.querySelector("span").textContent = originalText
        submitBtn.disabled = false

        // Hide success message after 5 seconds
        setTimeout(() => {
          successMessage.classList.remove("active")
        }, 5000)
      }, 1500)
    }
  })
}

// ===================================
// Animated Stats Counter
// ===================================
function initStats() {
  const statNumbers = document.querySelectorAll(".stat-number")
  let hasAnimated = false

  const animateStats = () => {
    statNumbers.forEach((stat) => {
      const target = Number.parseInt(stat.getAttribute("data-target"))
      const duration = 2000 // 2 seconds
      const increment = target / (duration / 16) // 60fps
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          stat.textContent = Math.floor(current)
          requestAnimationFrame(updateCounter)
        } else {
          stat.textContent = target
        }
      }

      updateCounter()
    })
  }

  // Observe stats section
  const statsSection = document.querySelector(".about-stats")
  if (statsSection) {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateStats()
            hasAnimated = true
            statsObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.5,
      },
    )

    statsObserver.observe(statsSection)
  }
}

// ===================================
// Hero Parallax Effect
// ===================================
function initParallax() {
  const hero = document.querySelector(".hero")
  const heroContent = document.querySelector(".hero-content")

  if (!hero || !heroContent) return

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const heroHeight = hero.offsetHeight

    // Only apply parallax within hero section
    if (scrolled < heroHeight) {
      const parallaxSpeed = 0.5
      heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
      heroContent.style.opacity = 1 - (scrolled / heroHeight) * 1.5
    }
  })
}

// ===================================
// Console Message
// ===================================
console.log(
  "%c WhiteLuckDigital ",
  "background: #00f0ff; color: #0a0a0f; font-size: 20px; font-weight: bold; padding: 10px;",
)
console.log("%c We Build the Future of the Web ", "background: #0a0a0f; color: #00f0ff; font-size: 14px; padding: 5px;")
console.log(
  "%c Interested in working with us? Contact us at hello@whiteluckdigital.com ",
  "color: #a0a0b0; font-size: 12px;",
)
