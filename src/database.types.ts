export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      log: {
        Row: {
          auth_uuid: string
          date: string
          ride_uuid: string
          time: string
          timestamp: string
          uuid: string
          variant_uuid: string | null
        }
        Insert: {
          auth_uuid?: string
          date?: string
          ride_uuid: string
          time?: string
          timestamp?: string
          uuid?: string
          variant_uuid?: string | null
        }
        Update: {
          auth_uuid?: string
          date?: string
          ride_uuid?: string
          time?: string
          timestamp?: string
          uuid?: string
          variant_uuid?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "log_ride_uuid_fkey"
            columns: ["ride_uuid"]
            isOneToOne: false
            referencedRelation: "ride"
            referencedColumns: ["uuid"]
          },
          {
            foreignKeyName: "log_variant_uuid_fkey"
            columns: ["variant_uuid"]
            isOneToOne: false
            referencedRelation: "variant"
            referencedColumns: ["uuid"]
          },
        ]
      }
      park: {
        Row: {
          name: string
          uuid: string
        }
        Insert: {
          name: string
          uuid?: string
        }
        Update: {
          name?: string
          uuid?: string
        }
        Relationships: []
      }
      ride: {
        Row: {
          has_image: boolean
          name: string
          park_uuid: string
          uuid: string
        }
        Insert: {
          has_image?: boolean
          name: string
          park_uuid: string
          uuid?: string
        }
        Update: {
          has_image?: boolean
          name?: string
          park_uuid?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "ride_park_uuid_fkey"
            columns: ["park_uuid"]
            isOneToOne: false
            referencedRelation: "park"
            referencedColumns: ["uuid"]
          },
        ]
      }
      variant: {
        Row: {
          name: string
          ride_uuid: string
          uuid: string
        }
        Insert: {
          name: string
          ride_uuid: string
          uuid?: string
        }
        Update: {
          name?: string
          ride_uuid?: string
          uuid?: string
        }
        Relationships: [
          {
            foreignKeyName: "variant_ride_uuid_fkey"
            columns: ["ride_uuid"]
            isOneToOne: false
            referencedRelation: "ride"
            referencedColumns: ["uuid"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_log_entries_for_date: {
        Args: {
          date_to_match: string
        }
        Returns: {
          uuid: string
          timestamp: string
          ride_name: string
          variant_name: string
        }[]
      }
      get_unique_dates: {
        Args: Record<PropertyKey, never>
        Returns: {
          date: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
