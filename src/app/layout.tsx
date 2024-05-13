import './style.css';

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className="bg-red-400">{children}</body>
        </html>
    )
}