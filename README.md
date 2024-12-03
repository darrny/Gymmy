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

## **How to Use the Website 🚀**

1. **Visit the Website**:  
   Go to the website: [gymmythegymbuddy.netlify.app](https://gymmythegymbuddy.netlify.app).

2. **Select Your Preferences**:
   - Choose your workout split.
   - Pick the muscle groups you want to target.
   - Set your fitness goal (strength, power, endurance).

3. **Generate a Workout**:  
   Click the "Let's go!" button to generate a customized workout based on your preferences.

4. **Start the Workout**:
   - Follow along with the generated workout.
   - Track sets, reps, and rest times with the interactive workout cards.

5. **Repeat**:  
   Generate new workouts anytime based on your changing preferences!

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
- **JavaScript**: Core language for handling state and functionality.
- **CSS**: For styling and transitions to enhance user experience.

---

## **Future Improvements 🌟**

- Add a database to store user preferences and past workout sessions.
- Include exercise tutorials with video demonstrations.
- Integrate a timer for tracking rest intervals between sets.
- Deploy the app for mobile users with a responsive design.

---

## **Screenshots 📸**
![Screenshot 2024-12-03 at 6 44 34 PM](https://github.com/user-attachments/assets/f399a7e6-443b-4d32-aac2-d8a8411f4735)
![Screenshot 2024-12-03 at 6 44 37 PM](https://github.com/user-attachments/assets/ed9b80ce-dc10-450a-832a-f97ab4fbc2f1)
![Screenshot 2024-12-03 at 6 44 41 PM](https://github.com/user-attachments/assets/fde4e28e-861d-4383-b77c-9c256b0e3f23)

---

## **Contributing 🤝**

Contributions are welcome! Feel free to open an issue or submit a pull request if you have ideas or improvements.

---

## **License 📜**

This project is licensed under the [MIT License](LICENSE).
