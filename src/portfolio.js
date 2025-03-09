const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/chaithukrissh/',
  title: 'C',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chaithanya Krishna',
  role: 'DevOps Engineer',
  description:
    'with overall 2.2 years of extensive experience, excelling in Azure and AWS environments. Expert in automating resource management using PowerShell and Python, while implementing CI/CD pipelines. Proven ability to enhance application performance through effective monitoring and orchestration with Kubernetes.Strong problem-solving skills and a commitment to delivering high-quality solutions',
  resume: 'https://drive.google.com/file/d/1WaOnDYcLmDukCgKRDONBr8JxuVEZl9A3/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/chaithanya-krishna-taticherla-22a937245/',
    github: 'https://github.com/chaithukrissh/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Python Project',
    description:
      'Chat Apllication where users can share images,chat, group chat and Use AI for any queries',
    stack: ['Python', 'Flask', 'Postgres' , "Socketio"],
    sourceCode: 'https://github.com/chaithukrissh',
    livePreview: 'https://www.chaithanyaverse.online',
  }
  // {
  //   name: 'Project 2',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
  // {
  //   name: 'Project 3',
  //   description:
  //     'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
  //   stack: ['SASS', 'TypeScript', 'React'],
  //   sourceCode: 'https://github.com',
  //   livePreview: 'https://github.com',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
    'Azure',
    'AWS',
    'CI/CD pipelines (Azure Pipelines, Jenkins)',
    'Kubernetes orchestration (AKS, EKS)',
    'Automation scripting (Python, Bash, PowerShell)',
    'Version control',
    'Resource management (Terraform, Ansible, ARM)',
  ' Monitoring (Grafana, Prometheus, Datadog)',
    'ELK',
    'Docker'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chaithanya.thaticherla@gmail.com',
}

export { header, about, projects, skills, contact }
