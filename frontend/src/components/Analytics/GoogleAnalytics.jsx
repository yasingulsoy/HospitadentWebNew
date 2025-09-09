import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views
    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_path: location.pathname + location.search,
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Track custom events for SEO
    const trackSEOElements = () => {
      // Track internal links
      const internalLinks = document.querySelectorAll('a[href^="/"]');
      internalLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.gtag) {
            window.gtag('event', 'internal_link_click', {
              link_url: link.href,
              link_text: link.textContent,
              page_location: window.location.href
            });
          }
        });
      });

      // Track form submissions
      const forms = document.querySelectorAll('form');
      forms.forEach(form => {
        form.addEventListener('submit', () => {
          if (window.gtag) {
            window.gtag('event', 'form_submit', {
              form_id: form.id || 'unknown',
              form_action: form.action,
              page_location: window.location.href
            });
          }
        });
      });

      // Track phone number clicks
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (window.gtag) {
            window.gtag('event', 'phone_click', {
              phone_number: link.href.replace('tel:', ''),
              page_location: window.location.href
            });
          }
        });
      });

      // Track appointment button clicks
      const appointmentButtons = document.querySelectorAll('button, a');
      appointmentButtons.forEach(button => {
        if (button.textContent.toLowerCase().includes('randevu') || 
            button.textContent.toLowerCase().includes('appointment')) {
          button.addEventListener('click', () => {
            if (window.gtag) {
              window.gtag('event', 'appointment_click', {
                button_text: button.textContent,
                page_location: window.location.href
              });
            }
          });
        }
      });
    };

    // Initialize tracking after page load
    setTimeout(trackSEOElements, 1000);

    // Track scroll depth
    let maxScroll = 0;
    const trackScrollDepth = () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // Track at 25%, 50%, 75%, 100%
        if (maxScroll >= 25 && maxScroll < 50) {
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              scroll_percentage: 25,
              page_location: window.location.href
            });
          }
        } else if (maxScroll >= 50 && maxScroll < 75) {
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              scroll_percentage: 50,
              page_location: window.location.href
            });
          }
        } else if (maxScroll >= 75 && maxScroll < 100) {
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              scroll_percentage: 75,
              page_location: window.location.href
            });
          }
        } else if (maxScroll >= 100) {
          if (window.gtag) {
            window.gtag('event', 'scroll_depth', {
              scroll_percentage: 100,
              page_location: window.location.href
            });
          }
        }
      }
    };

    window.addEventListener('scroll', trackScrollDepth);

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag) {
        window.gtag('event', 'time_on_page', {
          time_seconds: timeOnPage,
          page_location: window.location.href
        });
      }
    };

    // Track when user leaves page
    window.addEventListener('beforeunload', trackTimeOnPage);

    return () => {
      window.removeEventListener('scroll', trackScrollDepth);
      window.removeEventListener('beforeunload', trackTimeOnPage);
    };
  }, [location]);

  return null;
};

export default GoogleAnalytics; 