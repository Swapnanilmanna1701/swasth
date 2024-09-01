import { Skeleton } from "@/components/ui/skeleton";
import React from "react"

const Loading = () => {
    return (
        <div className="flex flex-col items-start w-full py-8 px-4 max-w-3xl mx-auto">
            <Skeleton className="w-24 h-4" />
            <Skeleton className="w-40 h-3 mt-4" />
            <Skeleton className="w-40 h-4 mt-10" />
            <Skeleton className="w-20 h-8 mt-4" />
            <Skeleton className="w-40 h-4 mt-10" />
            <Skeleton className="w-20 h-8 mt-4" />
            <Skeleton className="w-40 h-4 mt-10" />
            <Skeleton className="w-20 h-8 mt-4" />
        </div>
    )
};

export default Loading