<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Profile;

class ProfileSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('profiles')->truncate();
        Profile::create([
			'name' => 'Administrador',
			'description' => 'Perfil padrão de administrador do sistema',
			'acl_projects' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_templates_tickets' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_templates_tasks' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_types_tickets' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_types_tasks' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_users' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_profiles' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_roles' => '{"create":true, "read":true, "update":true, "delete":true}',
			'acl_change_logs' => '{"read":true, "download":true}',
			'acl_access_logs' => '{"read":true, "download":true}',
			'acl_settings' => '{"read":true, "update":true}',
            'created_by' => 1
        ]);
        $this->command->info('Administrator Profile Created');

        Profile::create([
			'name' => 'Usuário',
			'description' => 'Perfil padrão de usuário do sistema',
			'acl_projects' => '{"create":false, "read":true, "update":false, "delete":false}',
			'acl_templates_tickets' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_templates_tasks' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_types_tickets' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_types_tasks' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_users' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_profiles' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_roles' => '{"create":false, "read":false, "update":false, "delete":false}',
			'acl_change_logs' => '{"read":false, "download":false}',
			'acl_access_logs' => '{"read":false, "download":false}',
			'acl_settings' => '{"read":false, "update":false}',
            'created_by' => 1
        ]);
        $this->command->info('User Profile Created');
    }
}
