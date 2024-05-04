# MERN Blog Application Client 🚀

This is a multi-author blog application built using the MERN stack. Where user can see others users blog into home page also user can registration and login. After logging in, the user can create a blog,, bookmark a blog, and update his profile.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Contributing](#contributing)

## Installation

1. **Clone the repository**

```bash
git clone <repository-url>
```

2. **If pulled for the first time or the package.json changed run**

```bash
docker compose build
```

3. **Starting the environment in background**

```bash
docker compose up -d
```

4. **To see the logs of your app**

```bash
docker compose logs -f web
```

5. **If you need to install any npm package.**

```bash
docker compose exec web npm install <pacakge-name>
```

6. **Stop the containers.**

```bash
docker compose down
```

## Features

- 🌟 Clean and minimalist designs for a modern aesthetic
- 🌟 Responsive layouts optimized for any device
- 🌟 Infinite Scroll Using (IntersectionObserver) API
- 🌟 Forget Password With Custom OTP Form
- 🌟 Bookmarks Blog
- 🌟 Search And Pagination Into User Dashboard
- 🌟 Comment Features(comming soon)
- 🌟 Real Time Notification(comming soon)

## Contributing

Welcome contributions! Whether it's fixing a bug, adding a new feature, or improving documentation, your help is greatly appreciated.

## How to Contribute 👷

1. **Fork this repository**: Click the "Fork" button at the top right corner of this page to create your copy of the repository.

2. **Clone the forked repository**: Clone your forked repository to your local machine using the following command:

   ```bash
   git clone https://github.com/tajul-islam-refath/mern-blog-client.git
   ```

3. **Navigate to the project directory**: Move into the project directory using the following command:

   ```bash
   cd mern-blog-client
   ```

4. **Create a new branch**: Create a new branch for your changes using the following command:

   ```bash
   git checkout -b your_branch_name
   ```

5. **Add and commit your changes**: Add your changes to the staging area and commit them using the following commands:

   ```bash
   git add .
   git commit -m "Add your_commit_message"
   ```

6. **Push your local branch**: Push your local branch to your forked repository on GitHub using the following command:

   ```bash
   git push -u origin your_branch_name
   ```

7. **Create a Pull Request**: Go to your forked repository on GitHub and click the "New Pull Request" button. Fill out the Pull Request form and submit it to propose your changes.

That's it! Thank you for contributing! 🙌

---

Built with ❤️ by [Tajul Islam Refath](https://github.com/tajul-islam-refath) - [Follow me on LinkedIn](https://www.linkedin.com/in/tajul-islam-refath-94119a197/)
