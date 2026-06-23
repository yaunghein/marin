const palette = [
  { name: 'Matcha Late', hex: '#b8e2b6', text: '#4a3a30' },
  { name: 'Pure Matcha', hex: '#0da405', text: '#f9f8f3' },
  { name: 'Uji Matcha', hex: '#2a5128', text: '#f9f8f3' },
  { name: 'Oat Milk Foam', hex: '#ffe2b6', text: '#4a3a30' },
  { name: 'Orenge Americano', hex: '#ff890b', text: '#f9f8f3' },
  { name: 'Dark Roast', hex: '#5b3a01', text: '#f9f8f3' },
  { name: 'Milk Foam', hex: '#f9f8f3', text: '#4a3a30' },
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
            <div className="px-3 pb-4 text-center">
              <p
                className="text-xs leading-3.75 tracking-[0.015rem]"
                style={{ color: color.text }}
              >
                {color.name}
              </p>
              <p
                className="mt-1 text-xs uppercase leading-3.75 tracking-[0.015rem]"
                style={{ color: color.text }}
              >
                {color.hex}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
