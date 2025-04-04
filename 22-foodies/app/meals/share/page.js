'use client'
import classes from './page.module.css';
import ImagePicker from "@/components/meals/image-picker";
import {shareMeal} from "@/lib/actions";
import MealsFormSubmit from "@/app/meals/meals-form-submit";
import { useActionState } from "react";

export default function ShareMealPage() {
    const [state, formAction ] = useActionState(shareMeal, {
        message: null,
        values: {
            name: "",
            email: "",
            title: "",
            summary: "",
            instructions: ""
        }
    });

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                defaultValue={state.values.name}
                            />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                defaultValue={state.values.email}
                            />
                        </p>
                    </div>
                    <p>
                    <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            defaultValue={state.values.title}
                        />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            required
                            defaultValue={state.values.summary}
                        />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                            defaultValue={state.values.instructions}
                        />
                    </p>
                    <ImagePicker label="Your image" name="image"/>
                    {state.message && <p>{state.message}</p>}
                    <p className={classes.actions}>
                        <MealsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}