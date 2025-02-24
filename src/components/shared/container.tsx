import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={cn("max-w-screen-lg md:max-w-screen-xl mx-auto w-[90%]", className)}>
            {children}
        </div>
    );
};

export default Container;
