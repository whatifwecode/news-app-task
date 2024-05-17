const Loading = () => {
    return (
        <div  className="flex justify-center items-center h-full m-2">
            <div role='progressbar' className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900" />
        </div>
    );
}

export default Loading;