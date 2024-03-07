const Pause = () =>(
    <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path
    d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

const Play = () => (
    <svg viewBox="0 0 24 24" class="h-8 w-8" fill="currentColor"><path fill="currentColor" d="M8 5.14v14l11-7-11-7z"></path></svg>
)

export function Player () {
    return(
        <div className="flex flex-row justify-between w-full px-4 z-50">
            <div>
                Current song...
            </div>
            <div>
                Reproductor
            </div>
            <div>
                Volumen
            </div>
        </div>
    )
}