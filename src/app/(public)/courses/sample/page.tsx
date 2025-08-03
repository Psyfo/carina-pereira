import CoursePage from '../components/CoursePage/CoursePage';

const sampleCourseData = {
  hero: {
    title: 'Sample Course',
    subtitle: 'Unlock Your Potential',
    imageUrl: '/images/courses/hero/hero-md.png',
    imageUrlMobile: '/images/courses/hero-mobile.png',
  },
  about: {
    heading: 'About the Sample Course',
    subheading: 'A perfect introduction to modern skills.',
    description: [
      'This sample course is designed to give you a taste of our teaching style and course structure.',
      'You will learn foundational concepts and practical skills that you can apply immediately.',
    ],
    targets: [
      'Beginners looking to explore new topics',
      'Professionals seeking to refresh their knowledge',
    ],
    cost: 'R 1,500',
    details: [
      'Duration: 2 weeks',
      'Format: Online, self-paced',
      'Includes downloadable resources and quizzes',
    ],
    perks: [
      'Certificate of completion',
      'Access to community forums',
      'Direct support from instructors',
    ],
  },
  learning: {
    block: [
      {
        heading: 'Core Concepts',
        items: [
          'Understand the basics of the subject',
          'Familiarize yourself with key terminology',
        ],
        bgColour: '#7c3aed', // purple
      },
      {
        heading: 'Hands-on Projects',
        items: ['Work on real-world exercises', 'Build your own mini-projects'],
        bgColour: '#f59e42', // orange
      },
      {
        heading: 'Best Practices',
        items: ['Learn industry standards', 'Avoid common mistakes'],
        bgColour: '#10b981', // green
      },
      {
        heading: 'Continued Learning',
        items: [
          'Access resources for further study',
          'Join our learning community',
        ],
        bgColour: '#3b82f6', // blue
      },
      {
        heading: 'Collaboration',
        items: [
          'Participate in group activities',
          'Share knowledge with peers',
        ],
        bgColour: '#f43f5e', // pink
      },
      {
        heading: 'Personalized Feedback',
        items: [
          'Receive feedback from instructors',
          'Track your progress and achievements',
        ],
        bgColour: '#fbbf24', // yellow
      },
    ],
  },
  cta: {
    heading: 'Ready to Get Started?',
    text: 'Join now and take the first step towards mastering new skills!',
    buttonLabel: 'Enroll Now',
    link: '/enroll/sample',
    formType: 'regular',
  },
};

export default function SampleCoursePage() {
  return <CoursePage {...sampleCourseData} />;
}
