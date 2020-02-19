// const formatPhone = string => {
//     return (
//         <span>{`+${array[0]}${array[1]}(${array[2]}${array[3]}${array[4]})${array[5]}${array[6]}${array[7]}-${array[8]}${array[9]}-${array[10]}${array[11]}`}</span>
//     );
// };

// export

export const formatPhone = value => {
    const first = value.slice(0, 3).padEnd(3, "_");
    const second = value.slice(3, 5).padEnd(2, "_");
    const third = value.slice(5, 8).padEnd(2, "_");

    return `${first}-${second}-${third}`;
};
