import { motion } from "framer-motion";

interface Motion {
    component: React.ReactNode;
    key: string;
}

export function Motion(props: Motion): JSX.Element {
    return (
        <motion.div
            key={props.key}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring" }}
        >
            {props.component}
        </motion.div>
        );
}