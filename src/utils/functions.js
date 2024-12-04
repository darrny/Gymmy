import { EXERCISES, SCHEMES, TEMPOS, WORKOUTS } from "./workouts"
const exercises = exercisesFlattener(EXERCISES)

export function generateWorkout(args) {
    const { muscles, poison: workout, goal } = args;
    const exer = Object.keys(exercises).filter(
        (key) => exercises[key].meta.environment !== "home"
    );
    let includedTracker = [];
    let listOfMuscles = workout === "individual" ? muscles : WORKOUTS[workout][muscles[0]];
    listOfMuscles = Array.from(new Set(shuffleArray(listOfMuscles)));
    const scheme = SCHEMES[goal];

    // Group exercises by type and filter by muscle group
    const groupedExercises = exer.reduce(
        (acc, key) => {
            const exercise = exercises[key];
            exercise.muscles.forEach((muscle) => {
                if (listOfMuscles.includes(muscle)) {
                    acc[exercise.type] = acc[exercise.type] || {};
                    acc[exercise.type][key] = exercise;
                }
            });
            return acc;
        },
        { compound: {}, accessory: {} }
    );

    const sets = scheme.ratio.flatMap((count, index) =>
        Array(count)
            .fill(index === 0 ? "compound" : "accessory")
            .map((setType) => ({ setType }))
    );

    const workoutPlan = sets.map(({ setType }, idx) => {
        const muscle = listOfMuscles[idx % listOfMuscles.length];
        const exercisesPool = groupedExercises[setType];

        const validExercises = Object.keys(exercisesPool).filter(
            (key) =>
                !includedTracker.includes(key) &&
                exercisesPool[key].muscles.includes(muscle)
        );

        const selectedExerciseKey =
            validExercises[Math.floor(Math.random() * validExercises.length)];
        if (!selectedExerciseKey) return null;

        const selectedExercise = exercisesPool[selectedExerciseKey];
        includedTracker.push(selectedExerciseKey);

        const repsOrDuration =
            selectedExercise.unit === "reps"
                ? Math.max(...scheme.repRanges) -
                  Math.floor(Math.random() * (Math.max(...scheme.repRanges) - Math.min(...scheme.repRanges)))
                : Math.ceil(Math.random() * 40) + 20;

        return {
            name: selectedExerciseKey,
            muscle,
            type: setType,
            reps: repsOrDuration,
            tempo: TEMPOS[Math.floor(Math.random() * TEMPOS.length)],
            rest: setType === "compound" ? scheme.rest[0] : scheme.rest[1],
            ...selectedExercise,
        };
    });

    return workoutPlan.filter(Boolean);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

function exercisesFlattener(exercisesObj) {
    const flattenedObj = {}

    for (const [key, val] of Object.entries(exercisesObj)) {
        if (!("variants" in val)) {
            flattenedObj[key] = val
        } else {
            for (const variant in val.variants) {
                let variantName = variant + "_" + key
                let variantSubstitutes = Object.keys(val.variants).map((element) => {
                    return element + ' ' + key
                }).filter(element => element.replaceAll(' ', '_') !== variantName)

                flattenedObj[variantName] = {
                    ...val,
                    description: val.description + '___' + val.variants[variant],
                    substitutes: [
                        ...val.substitutes, variantSubstitutes
                    ].slice(0, 5)
                }
            }
        }
    }
    return flattenedObj
}