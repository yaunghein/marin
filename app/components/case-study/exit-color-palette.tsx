const palette = [
  { name: 'Matcha Latte', hex: '#a3dca1', text: '#3d352e' },
  { name: 'Pure Matcha', hex: '#0da405', text: '#f9f8f3' },
  { name: 'Uji Matcha', hex: '#2a5128', text: '#f9f8f3' },
  { name: 'Oat Milk Foam', hex: '#ffe2b6', text: '#3d352e' },
  { name: 'Orange Americano', hex: '#ff890b', text: '#f9f8f3' },
  { name: 'Dark Roast', hex: '#5b3a01', text: '#f9f8f3' },
  { name: 'Milk Foam', hex: '#f9f8f3', text: '#3d352e' },
  { name: 'Coffee', hex: '#29251e', text: '#f9f8f3' },
] as const

export default function ExitColorPalette() {
  return (
    <div className="grid grid-cols-8">
      {palette.map((color) => (
        <div
          key={color.name}
          className="flex flex-col"
          style={{ backgroundColor: color.hex }}
        >
          <div className="aspect-178/366 w-full grid place-items-center">
            <p
              className="px-3 pb-4 text-xs leading-3.75 tracking-[0.015rem]"
              style={{ color: color.text }}
            >
              {color.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
