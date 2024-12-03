# **Gymmy 💪🫱**

**Gymmy** is your personal workout companion that generates a customized workout session tailored to your needs. Choose your workout split, target muscle groups, and fitness goals, and Gymmy will create a plan to help you achieve your objectives!

---

## **Features ✨**

- Generates workout sessions based on:
  - Split type (e.g., individual, push-pull, etc.).
  - Muscle groups you want to train.
  - Fitness goals like strength, power, or endurance.
- Interactive and intuitive user interface built with React.
- Fully functional workout cards to track progress during sessions.
- Modern design with animations and transitions for an engaging user experience.

---

## **How It Works 🔍**

1. **Choose Your Preferences**:
   - Select your workout split type.
   - Pick one or more muscle groups to target.
   - Define your fitness goal (e.g., strength, endurance).

2. **Generate a Workout**:
   - Gymmy uses your inputs to create a tailored workout session.
   - The app ensures the workout aligns with your goals and chosen muscles.

3. **Track Your Progress**:
   - Each workout card lets you track sets, reps, and rest times.
   - Progress is visually highlighted as you complete sets.

---

## **Code Overview 🛠️**

### **App.js**
- Manages application state and handles workout generation.
- Uses the `generateWorkout` function to create a tailored workout based on user inputs.

### **Hero Component**
- Displays the app's title, description, and call-to-action button.
- Features an animated Gymmy logo for visual appeal.

### **Generator Component**
- Provides options for the user to:
  - Select a workout split.
  - Choose target muscle groups.
  - Define fitness goals.
- Includes interactive buttons and modals for a seamless user experience.

### **Workout Component**
- Displays a list of exercises in the generated workout.
- Each exercise is represented as a card, showcasing:
  - Name, type, and muscle groups targeted.
  - Description, reps, rest, and tempo.
  - Progress tracking with a "Sets Completed" button.

### **ExerciseCard Component**
- Tracks sets completed for each exercise.
- Includes dynamic styling based on progress to keep users motivated.

---

## **Technologies Used 🖥️**

- **React**: Frontend framework for creating interactive UI components.
- **Gradio**: Interface library for connecting models to the UI.
- **JavaScript**: Core language for handling state and functionality.

---

## **Future Improvements 🌟**

- Add a database to store user preferences and past workout sessions.
- Include exercise tutorials with video demonstrations.
- Integrate a timer for tracking rest intervals between sets.
- Deploy the app for mobile users with a responsive design.

---

## **Screenshots 📸**

<img width="800" alt="Gymmy Screenshot 1" src="https://github.com/user-attachments/assets/your-screenshot-1.png">
<img width="800" alt="Gymmy Screenshot 2" src="https://github.com/user-attachments/assets/your-screenshot-2.png">
<img width="800" alt="Gymmy Screenshot 3" src="https://github.com/user-attachments/assets/your-screenshot-3.png">

---

## **Contributing 🤝**

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas or improvements.

---

## **License 📜**

This project is licensed under the [MIT License](LICENSE).
