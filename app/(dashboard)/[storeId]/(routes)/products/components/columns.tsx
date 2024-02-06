"use client"

import {ColumnDef} from "@tanstack/react-table"

import {CellAction} from "./cell-action"
import {Badge} from "@/components/ui/badge";

export type ProductColumn = {
    id: string
    name: string;
    price: string;
    category: string;
    size: string;
    color: string;
    createdAt: string;
    isFeatured: boolean;
    isArchived: boolean;
}

type BadgeVariant = "destructive" | "outline";

export const columns: ColumnDef<ProductColumn>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "isArchived",
        header: "Archivado",
        cell: ({row}) => {
            const isArchived = row.original.isArchived ? "outline" : "destructive" as BadgeVariant;
            return (
                <Badge variant={isArchived}>
                    {row.original.isArchived ? "Si" : "No"}
                </Badge>
            )
        }
    },
    {
        accessorKey: "isFeatured",
        header: "Destacado",
        cell: ({row}) => {
            const isFeatured = row.original.isFeatured ? "outline" : "destructive" as BadgeVariant;
            return (
                <Badge variant={isFeatured}>
                    {row.original.isFeatured ? "Si" : "No"}
                </Badge>
            )
        }
    },
    {
        accessorKey: "price",
        header: "Precio",
    },
    {
        accessorKey: "category",
        header: "Categoría",
    },
    {
        accessorKey: "size",
        header: "Talla",
    },
    {
        accessorKey: "color",
        header: "Color",
        cell: ({row}) => (
            <div className="flex items-center gap-x-2">
                {row.original.color}
                <div className="h-6 w-6 rounded-full border" style={{backgroundColor: row.original.color}}/>
            </div>
        )
    },
    {
        accessorKey: "createdAt",
        header: "Fecha",
    },
    {
        id: "actions",
        cell: ({row}) => <CellAction data={row.original}/>
    },
];
