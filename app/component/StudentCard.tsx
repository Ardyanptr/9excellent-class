interface StudentCardProps {
    name: string
    role: string
}

export default function StudentCard({ name, role }: StudentCardProps) {
    return (
        <>
            <div className="bg-white rounded-lg shadow-lg p-4 flex-col items-center text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center text-xl font-bold">
                    {name[0]}
                </div>
                <p className="mt-2 font-semibold">{name}</p>
                <p className="text-sm text-gray-500 font-semibold">{role}</p>
            </div>
        </>
    )
}