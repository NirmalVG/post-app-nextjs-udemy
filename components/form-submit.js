"use client";

import { useActionState } from "react";

const FormSubmit = () => {
    const status = useActionState();

    if (status.pending) {
        return <p>Creating post...</p>;
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    );
};

export default FormSubmit;
