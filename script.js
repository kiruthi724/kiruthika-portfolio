/**
 * Kiruthika D — Personal Portfolio JavaScript
 *
 * Core functionalities:
 * 1. Subtle Anti-Gravity Cursor Interaction (Project Card)
 * 2. Interactive Task Counter (DOM Manipulation Demo)
 * 3. Copy Email to Clipboard with Feedback
 * 4. Client-side Contact Form Validation
 * 5. Mobile Navigation Menu Toggle & Active Link Tracking
 */

document.addEventListener('DOMContentLoaded', function () {

  /* ==========================================================================
     1. Header Scroll Effect & Active Navigation Link Tracking
     ========================================================================== */
  const siteHeader = document.getElementById('siteHeader');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section');

  // Add subtle background shadow when scrolling down
  window.addEventListener('scroll', function () {
    if (siteHeader) {
      if (window.scrollY > 40) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    }

    // Highlight active nav link based on scroll position
    let currentSectionId = '';
    const scrollPosition = window.scrollY + 120;

    sections.forEach(function (section) {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute('id');
      }
    });

    navLinks.forEach(function (link) {
      link.classList.remove('active');

      if (link.getAttribute('href') === '#' + currentSectionId) {
        link.classList.add('active');
      }
    });
  });

  /* ==========================================================================
     2. Mobile Menu Toggle
     ========================================================================== */
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';

      menuToggle.setAttribute('aria-expanded', !isExpanded);
      navMenu.classList.toggle('open');
    });

    // Close mobile menu when any navigation link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        navMenu.classList.remove('open');
      });
    });
  }

  /* ==========================================================================
     3. Anti-Gravity Cursor Interaction (Featured Project Card)
     --------------------------------------------------------------------------
     "I used JavaScript mouse events to create a small movement effect on the
      project card when the cursor interacts with it."
     ========================================================================== */
  const antiGravityCard = document.getElementById('antiGravityCard');

  if (antiGravityCard) {
    // When the mouse moves inside the project card
    antiGravityCard.addEventListener('mousemove', function (event) {
      const rect = antiGravityCard.getBoundingClientRect();

      // Calculate cursor position relative to the center of the card
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      const deltaX = event.clientX - cardCenterX;
      const deltaY = event.clientY - cardCenterY;

      // Normalize offsets to small, subtle rotation and lift values
      const rotateX = -(deltaY / (rect.height / 2)) * 4;
      const rotateY = (deltaX / (rect.width / 2)) * 4;
      const translateY = -6;

      // Apply subtle 3D transform with dynamic values
      antiGravityCard.style.transform =
        'perspective(1000px) rotateX(' +
        rotateX.toFixed(2) +
        'deg) rotateY(' +
        rotateY.toFixed(2) +
        'deg) translateY(' +
        translateY +
        'px)';

      antiGravityCard.style.boxShadow =
        '0 16px 36px -4px rgba(0, 0, 0, 0.6), 0 0 25px rgba(56, 189, 248, 0.15)';

      antiGravityCard.style.borderColor =
        'rgba(56, 189, 248, 0.4)';
    });

    // Restore the card when cursor leaves
    antiGravityCard.addEventListener('mouseleave', function () {
      antiGravityCard.style.transform =
        'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';

      antiGravityCard.style.boxShadow = '';
      antiGravityCard.style.borderColor = '';
    });
  }

  /* ==========================================================================
     4. Interactive Task Counter (JavaScript DOM Demonstration)
     ========================================================================== */
  const taskInput = document.getElementById('taskInput');
  const addTaskButton = document.getElementById('addTaskButton');
  const taskList = document.getElementById('taskList');

  const taskCount = document.getElementById('taskCount');
  const taskInputHint = document.getElementById('taskInputHint');
  const emptyState = document.getElementById('emptyState');

  /*
   * The portfolio page does not contain the task-list elements.
   * Only run the task-counter code when taskList exists.
   */
  if (taskList) {

    // Function to calculate and refresh the pending task count badge
    function updateTaskCount() {
      const allTasks = taskList.querySelectorAll('.task-item');
      const completedTasks =
        taskList.querySelectorAll('.task-item.completed');

      const pendingCount =
        allTasks.length - completedTasks.length;

      if (taskCount) {
        taskCount.textContent = pendingCount;
      }

      // Toggle empty state visibility
      if (emptyState) {
        if (allTasks.length === 0) {
          emptyState.style.display = 'block';
        } else {
          emptyState.style.display = 'none';
        }
      }
    }

    // Function to attach click event to toggle a task's completed state
    function attachTaskClickEvent(taskElement) {
      taskElement.addEventListener('click', function () {

        taskElement.classList.toggle('completed');

        const statusTag =
          taskElement.querySelector('.task-status-tag');

        if (statusTag) {
          if (taskElement.classList.contains('completed')) {
            statusTag.textContent = 'Completed';
          } else {
            statusTag.textContent = 'Click to complete';
          }
        }

        updateTaskCount();
      });
    }

    // Attach click events to the initial predefined tasks
    const initialTaskItems =
      taskList.querySelectorAll('.task-item');

    initialTaskItems.forEach(function (task) {
      attachTaskClickEvent(task);
    });

    // Function to add a new task item
    function addNewTask() {

      if (!taskInput) {
        return;
      }

      const taskTextValue = taskInput.value.trim();

      // Basic Validation
      if (taskTextValue === '') {

        taskInput.classList.add('error');

        if (taskInputHint) {
          taskInputHint.classList.add('visible');
        }

        taskInput.focus();
        return;
      }

      // Clear previous error states
      taskInput.classList.remove('error');

      if (taskInputHint) {
        taskInputHint.classList.remove('visible');
      }

      // Create the task list item
      const newTaskItem = document.createElement('li');
      newTaskItem.className = 'task-item';

      // Checkbox indicator
      const checkboxIndicator = document.createElement('div');
      checkboxIndicator.className = 'task-checkbox-indicator';

      checkboxIndicator.innerHTML =
        '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">' +
        '<polyline points="20 6 9 17 4 12"></polyline>' +
        '</svg>';

      // Task text
      const taskTextSpan = document.createElement('span');
      taskTextSpan.className = 'task-text';
      taskTextSpan.textContent = taskTextValue;

      // Task status tag
      const statusTag = document.createElement('span');
      statusTag.className = 'task-status-tag';
      statusTag.textContent = 'Click to complete';

      // Assemble task item
      newTaskItem.appendChild(checkboxIndicator);
      newTaskItem.appendChild(taskTextSpan);
      newTaskItem.appendChild(statusTag);

      // Attach completion behavior
      attachTaskClickEvent(newTaskItem);

      // Add task to list
      taskList.appendChild(newTaskItem);

      taskInput.value = '';
      taskInput.focus();

      // Update counter
      updateTaskCount();
    }

    // Add task on button click
    if (addTaskButton) {
      addTaskButton.addEventListener('click', addNewTask);
    }

    // Add task when Enter is pressed
    if (taskInput) {

      taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
          event.preventDefault();
          addNewTask();
        }
      });

      // Reset error state on input
      taskInput.addEventListener('input', function () {
        if (taskInput.value.trim() !== '') {
          taskInput.classList.remove('error');

          if (taskInputHint) {
            taskInputHint.classList.remove('visible');
          }
        }
      });
    }

    // Initial calculation
    updateTaskCount();
  }

  /* ==========================================================================
     5. Copy Email to Clipboard Functionality
     ========================================================================== */
  const copyEmailBtn =
    document.getElementById('copyEmailBtn');

  const copyLabel =
    document.getElementById('copyLabel');

  const toastNotification =
    document.getElementById('toastNotification');

  const emailToCopy =
    'dayalankiruthika88@gmail.com';

  function showToast(message) {

    if (!toastNotification) {
      return;
    }

    toastNotification.textContent = message;
    toastNotification.classList.add('show');

    setTimeout(function () {
      toastNotification.classList.remove('show');
    }, 3000);
  }

  if (copyEmailBtn) {

    copyEmailBtn.addEventListener('click', function () {

      if (
        navigator.clipboard &&
        navigator.clipboard.writeText
      ) {

        navigator.clipboard
          .writeText(emailToCopy)
          .then(function () {

            if (copyLabel) {
              copyLabel.textContent = 'Copied!';
            }

            showToast(
              'Email copied to clipboard: ' +
              emailToCopy
            );

            setTimeout(function () {

              if (copyLabel) {
                copyLabel.textContent = 'Copy';
              }

            }, 2000);

          })
          .catch(function () {
            fallbackCopyText(emailToCopy);
          });

      } else {
        fallbackCopyText(emailToCopy);
      }
    });
  }

  function fallbackCopyText(text) {

    const tempInput =
      document.createElement('input');

    tempInput.value = text;

    document.body.appendChild(tempInput);

    tempInput.select();

    try {

      document.execCommand('copy');

      if (copyLabel) {
        copyLabel.textContent = 'Copied!';
      }

      showToast(
        'Email copied to clipboard: ' +
        text
      );

      setTimeout(function () {

        if (copyLabel) {
          copyLabel.textContent = 'Copy';
        }

      }, 2000);

    } catch (err) {

      showToast(
        'Please copy manually: ' +
        text
      );
    }

    document.body.removeChild(tempInput);
  }

  /* ==========================================================================
     6. Client-Side Contact Form Validation
     ========================================================================== */
  const contactForm =
    document.getElementById('contactForm');

  const contactName =
    document.getElementById('contactName');

  const contactEmail =
    document.getElementById('contactEmail');

  const contactMessage =
    document.getElementById('contactMessage');

  const nameError =
    document.getElementById('nameError');

  const emailError =
    document.getElementById('emailError');

  const messageError =
    document.getElementById('messageError');

  const formFeedback =
    document.getElementById('formFeedback');

  function validateEmailFormat(email) {

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailRegex.test(email);
  }

  if (contactForm) {

    contactForm.addEventListener('submit', function (event) {

      event.preventDefault();

      let isValid = true;

      // Validate Name
      if (!contactName || contactName.value.trim() === '') {

        if (contactName) {
          contactName.classList.add('is-invalid');
        }

        if (nameError) {
          nameError.classList.add('visible');
        }

        isValid = false;

      } else {

        contactName.classList.remove('is-invalid');

        if (nameError) {
          nameError.classList.remove('visible');
        }
      }

      // Validate Email
      const emailVal =
        contactEmail ? contactEmail.value.trim() : '';

      if (
        emailVal === '' ||
        !validateEmailFormat(emailVal)
      ) {

        if (contactEmail) {
          contactEmail.classList.add('is-invalid');
        }

        if (emailError) {
          emailError.classList.add('visible');
        }

        isValid = false;

      } else {

        contactEmail.classList.remove('is-invalid');

        if (emailError) {
          emailError.classList.remove('visible');
        }
      }

      // Validate Message
      if (
        !contactMessage ||
        contactMessage.value.trim() === ''
      ) {

        if (contactMessage) {
          contactMessage.classList.add('is-invalid');
        }

        if (messageError) {
          messageError.classList.add('visible');
        }

        isValid = false;

      } else {

        contactMessage.classList.remove('is-invalid');

        if (messageError) {
          messageError.classList.remove('visible');
        }
      }

      if (isValid) {

        // Show confirmation feedback
        if (formFeedback) {

          formFeedback.className =
            'form-feedback success';

          formFeedback.textContent =
            'Thank you, ' +
            contactName.value.trim() +
            '! Your message preview is ready. Feel free to also send an email directly to dayalankiruthika88@gmail.com.';

          // Reset form inputs
          contactForm.reset();

          setTimeout(function () {
            formFeedback.style.display = 'none';
          }, 6000);
        }
      }
    });

    // Reset error on input for form fields
    [contactName, contactEmail, contactMessage]
      .forEach(function (field) {

        if (field) {

          field.addEventListener('input', function () {

            field.classList.remove('is-invalid');

            const errorSpan =
              document.getElementById(
                field.id
                  .replace('contact', '')
                  .toLowerCase() + 'Error'
              );

            if (errorSpan) {
              errorSpan.classList.remove('visible');
            }
          });
        }
      });
  }

});
