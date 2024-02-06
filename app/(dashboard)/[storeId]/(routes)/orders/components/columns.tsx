"use client"

import {ColumnDef} from "@tanstack/react-table"
import {Badge} from "@/components/ui/badge";

export type OrderColumn = {
    id: string;
    phone: string;
    address: string;
    isPaid: boolean;
    totalPrice: string;
    products: string;
    createdAt: string;
}

type BadgeVariant = "destructive" | "outline";

export const columns: ColumnDef<OrderColumn>[] = [
    {
        accessorKey: "products",
        header: "Producto",
    },
    {
        accessorKey: "phone",
        header: "Telefono",
    },
    {
        accessorKey: "address",
        header: "Direccion",
    },
    {
        accessorKey: "totalPrice",
        header: "Precio total",
    },
    {
        accessorKey: "isPaid",
        header: "Estado",
        cell: ({row}) => {
            const isPaid = row.original.isPaid ? "outline" : "destructive" as BadgeVariant;
            return (
                <Badge variant={isPaid}>
                    {row.original.isPaid ? "Pagado" : "No pagado"}
                </Badge>
            )
        }
    },
];
