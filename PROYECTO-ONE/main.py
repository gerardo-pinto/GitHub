import json

def guardar_datos(datos):
    with open('datos.json', 'w') as file:
        json.dump(datos, file)

def cargar_datos():
    try:
        with open('datos.json', 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []

def agregar_persona():
    nombre = input("Ingrese el nombre: ")
    rut = input("Ingrese el RUT: ")
    telefono = input("Ingrese el teléfono: ")
    direccion = input("Ingrese la dirección: ")

    datos = cargar_datos()
    datos.append({
        'nombre': nombre,
        'rut': rut,
        'telefono': telefono,
        'direccion': direccion
    })
    guardar_datos(datos)

def ver_personas():
    datos = cargar_datos()
    for persona in datos:
        print(f"Nombre: {persona['nombre']}, RUT: {persona['rut']}, Teléfono: {persona['telefono']}, Dirección: {persona['direccion']}")

def menu():
    while True:
        print("\n1. Agregar persona")
        print("2. Ver personas")
        print("3. Salir")
        opcion = input("Seleccione una opción: ")

        if opcion == '1':
            agregar_persona()
        elif opcion == '2':
            ver_personas()
        elif opcion == '3':
            break
        else:
            print("Opción no válida. Por favor, intente de nuevo.")

if __name__ == "__main__":
    menu()
