/**
 * Avatar Utility Functions
 * Digunakan untuk generate initials dan warna avatar
 */

/**
 * Generate initials from a name
 * @param name - The name to generate initials from
 * @returns Initials (2 characters)
 */
export function getInitials(name: string): string {
    const words = name.trim().split(" ");
    if (words.length === 1) {
        return words[0].substring(0, 2).toUpperCase();
    }
    return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

/**
 * Generate avatar color based on name
 * @param name - The name to generate color from
 * @returns Tailwind CSS color class
 */
export function getAvatarColor(name: string): string {
    const colors = [
        "bg-blue-500",
        "bg-purple-500",
        "bg-pink-500",
        "bg-indigo-500",
        "bg-cyan-500",
        "bg-teal-500",
        "bg-emerald-500",
        "bg-amber-500",
        "bg-orange-500",
        "bg-rose-500",
    ];
    const index =
        name
            .split("")
            .reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        colors.length;
    return colors[index];
}
