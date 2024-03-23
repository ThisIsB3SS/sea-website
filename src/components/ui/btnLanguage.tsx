import { Button } from "./button";
import { useState } from "react";

const BtnLanguage = () => {
    const [langage, setLangage] = useState('fr');
    return (
        <Button variant="default" size="sm" onClick={(setLangage(!langage))}>
        Language
        </Button>
    );
}