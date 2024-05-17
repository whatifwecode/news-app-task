interface ErrorProps {
    message: string;
}

const Error = ({ message }: ErrorProps) => {
    return (
        <div role="alert" className="text-red-500 p-4 bg-gray-100 border border-red-300 rounded">
            <p className="font-bold mb-2">{message}</p>
        </div>
    );
}

export default Error;
