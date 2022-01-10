<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Role;

class RoleSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(){
        DB::table('roles')->truncate();
        Role::create([
            'name' => 'Gerente de Projeto',
			'description' => 'Papel de Gerente de Projeto',
            'atributed_to_ticket' => True,						//User can be atributed to a ticket
			'atributed_to_task' => True,						//User can be atributed to a task
			//Atribute
			'atribute_ticket' => True,							//User can atribute users to a ticket
			'atribute_task' => True,							//User can atribute users to a task
			//Tickets
			'create_ticket' => True,							//User can create a ticket inside a project
			'delete_ticket' => True,							//User can delete a ticket from the project
			'delete_owned_ticket' => True,						//User can delete a ticket that he owns from the project
			'change_ticket_description' => True,				//user can change the description of a ticket
			'change_owned_ticket_description' => True,			//user can change the description of a ticket that he owns
			'change_atributed_ticket_description' => True,		//user can change the description of a ticket that he is atributed to
			'change_ticket_title' => True,						//user can change the title of a ticket
			'change_owned_ticket_title' => True,     			//user can change the title of a ticket that he owns
			'change_atributed_ticket_title' => True, 			//user can change the title of a ticket that he is atributed to
			'change_ticket_likelihood' => True,					//user can change the likelihood of a ticket
			'change_owned_ticket_likelihood' => True,			//user can change the likelihood of a ticket that he owns
			'change_atributed_ticket_likelihood' => True,  		//user can change the likelihood of a ticket that he is atributed to
			'change_ticket_severity' => True,					//user can change the severity of a ticket
			'change_owned_ticket_severity' => True,        		//user can change the severity of a ticket that he owns
			'change_atributed_ticket_severity' => True,    		//user can change the severity of a ticket that he is atributed to
			'change_ticket_status' => True,						//user can change the status of a ticket
			'change_owned_ticket_status' => True,        		//user can change the status of a ticket that he owns
			'change_atributed_ticket_status' => True,    		//user can change the status of a ticket that he is atributed to
			'change_ticket_type' => True,						//user can change the type of a ticket
			'change_owned_ticket_type' => True,        			//user can change the type of a ticket that he owns
			'change_atributed_ticket_type' => True,    			//user can change the type of a ticket that he is atributed to
			//Tasks
			'create_task' => True,								//User can create a task to the project
			'delete_task' => True,								//User can delete a task from the project
			'delete_owned_task' => True,						//User can delete a task that he owns from the project
			'change_task_description' => True,					//user can change the description of a task
			'change_owned_task_description' => True,			//user can change the description of a task that he owns
			'change_atributed_task_description' => True,		//user can change the description of a task that he is atributed to
			'change_task_title' => True,						//user can change the title of a task
			'change_owned_task_title' => True,     				//user can change the title of a task that he owns
			'change_atributed_task_title' => True, 				//user can change the title of a task that he is atributed to
			'change_task_priority' => True,						//user can change the priority of a task
			'change_owned_task_priority' => True,     	 		//user can change the priority of a task that he owns
			'change_atributed_task_priority' => True,			//user can change the priority of a task that he is atributed to
			'change_task_deadline' => True,						//user can change the deadline of a task
			'change_owned_task_deadline' => True,				//user can change the deadline of a task that he owns
			'change_atributed_task_deadline' => True,			//user can change the deadline of a task that he is atributed to
			'change_task_status' => True,						//user can change the status of a task
			'change_owned_task_status' => True,        			//user can change the status of a task that he owns
			'change_atributed_task_status' => True,    			//user can change the status of a task that he is atributed to
			//Attachments
			'add_attachment_to_ticket' => True,				    //User can add a attachment to a ticket
			'add_attachment_to_owned_ticket' => True,			//User can add a attachment to a ticket
			'add_attachment_to_atributed_ticket' => True,		//User can add a attachment to a ticket
			'add_attachment_to_project' => True,				//User can add a attachment to a project (Outside a ticket
			'delete_attachment_from_ticket' => True,			//User can delete a attachment from any ticket in the project
			'delete_attachment_from_owned_ticket' => True,		//User can delete a attachment from tickets that he owns
			'delete_attachment_from_atributed_ticket' => True,	//User can delete a attachment from tickets that he is atrubuted to
			'delete_attachment_from_project' => True,			//User can delete a attachment from the project
			'delete_owned_attachment_from_project' => True,		//User can delete a attachment that he owns from the project
			//Comments
			'add_comment_to_ticket' => True,					//User can add a comment to a ticket
			'add_comment_to_owned_ticket' => True,				//User can add a comment to a ticket
			'add_comment_to_atributed_ticket' => True,			//User can add a comment to a ticket
			'add_comment_to_project' => True,					//User can add a comment to a project (Outside a ticket
			'delete_comment_from_ticket' => True,				//User can delete a comments from any ticket in the project
			'delete_comment_from_owned_ticket' => True,		    //User can delete a acomment from tickets that he owns
			'delete_comment_from_atributed_ticket' => True,	    //User can delete a acomment from tickets that he is atrubuted to
			'delete_comment_from_project' => True,				//User can delete a comment from the project
			'delete_owned_comment_from_project' => True,		//User can delete a comment that he owns from the project
            'created_by' => 1
        ]);
        $this->command->info('Role Project Manager created');

        Role::create([
            'name' => 'Testador',
			'description' => 'Papel de Testador',
            'atributed_to_ticket' => True,						//User can be atributed to a ticket
			'atributed_to_task' => True,						//User can be atributed to a task
			//Atribute
			'atribute_ticket' => False,							//User can atribute users to a ticket
			'atribute_task' => False,							//User can atribute users to a task
			//Tickets
			'create_ticket' => True,							//User can create a ticket inside a project
			'delete_ticket' => False,							//User can delete a ticket from the project
			'delete_owned_ticket' => True,						//User can delete a ticket that he owns from the project
			'change_ticket_description' => False,				//user can change the description of a ticket
			'change_owned_ticket_description' => True,			//user can change the description of a ticket that he owns
			'change_atributed_ticket_description' => False,		//user can change the description of a ticket that he is atributed to
			'change_ticket_title' => False,						//user can change the title of a ticket
			'change_owned_ticket_title' => True,     			//user can change the title of a ticket that he owns
			'change_atributed_ticket_title' => False, 			//user can change the title of a ticket that he is atributed to
			'change_ticket_likelihood' => False,				//user can change the likelihood of a ticket
			'change_owned_ticket_likelihood' => True,			//user can change the likelihood of a ticket that he owns
			'change_atributed_ticket_likelihood' => False,  	//user can change the likelihood of a ticket that he is atributed to
			'change_ticket_severity' => False,					//user can change the severity of a ticket
			'change_owned_ticket_severity' => True,        		//user can change the severity of a ticket that he owns
			'change_atributed_ticket_severity' => False,    	//user can change the severity of a ticket that he is atributed to
			'change_ticket_status' => False,					//user can change the status of a ticket
			'change_owned_ticket_status' => True,        		//user can change the status of a ticket that he owns
			'change_atributed_ticket_status' => False,    		//user can change the status of a ticket that he is atributed to
			'change_ticket_type' => False,						//user can change the type of a ticket
			'change_owned_ticket_type' => True,        			//user can change the type of a ticket that he owns
			'change_atributed_ticket_type' => False,    		//user can change the type of a ticket that he is atributed to
			//Tasks
			'create_task' => True,								//User can create a task to the project
			'delete_task' => False,								//User can delete a task from the project
			'delete_owned_task' => True,						//User can delete a task that he owns from the project
			'change_task_description' => False,					//user can change the description of a task
			'change_owned_task_description' => True,			//user can change the description of a task that he owns
			'change_atributed_task_description' => False,		//user can change the description of a task that he is atributed to
			'change_task_title' => False,						//user can change the title of a task
			'change_owned_task_title' => True,     				//user can change the title of a task that he owns
			'change_atributed_task_title' => False, 			//user can change the title of a task that he is atributed to
			'change_task_priority' => False,					//user can change the priority of a task
			'change_owned_task_priority' => True,     	 		//user can change the priority of a task that he owns
			'change_atributed_task_priority' => False,			//user can change the priority of a task that he is atributed to
			'change_task_deadline' => False,					//user can change the deadline of a task
			'change_owned_task_deadline' => True,				//user can change the deadline of a task that he owns
			'change_atributed_task_deadline' => False,			//user can change the deadline of a task that he is atributed to
			'change_task_status' => False,						//user can change the status of a task
			'change_owned_task_status' => True,        			//user can change the status of a task that he owns
			'change_atributed_task_status' => False,    		//user can change the status of a task that he is atributed to
			//Attachments
			'add_attachment_to_ticket' => False,				//User can add a attachment to a ticket
			'add_attachment_to_owned_ticket' => True,			//User can add a attachment to a ticket
			'add_attachment_to_atributed_ticket' => True,		//User can add a attachment to a ticket
			'add_attachment_to_project' => True,				//User can add a attachment to a project (Outside a ticket
			'delete_attachment_from_ticket' => False,			//User can delete a attachment from any ticket in the project
			'delete_attachment_from_owned_ticket' => True,		//User can delete a attachment from tickets that he owns
			'delete_attachment_from_atributed_ticket' => True,	//User can delete a attachment from tickets that he is atrubuted to
			'delete_attachment_from_project' => False,			//User can delete a attachment from the project
			'delete_owned_attachment_from_project' => True,		//User can delete a attachment that he owns from the project
			//Comments
			'add_comment_to_ticket' => False,					//User can add a comment to a ticket
			'add_comment_to_owned_ticket' => True,				//User can add a comment to a ticket
			'add_comment_to_atributed_ticket' => True,			//User can add a comment to a ticket
			'add_comment_to_project' => True,					//User can add a comment to a project (Outside a ticket
			'delete_comment_from_ticket' => False,				//User can delete a comments from any ticket in the project
			'delete_comment_from_owned_ticket' => True,		    //User can delete a acomment from tickets that he owns
			'delete_comment_from_atributed_ticket' => False,	//User can delete a acomment from tickets that he is atrubuted to
			'delete_comment_from_project' => True,				//User can delete a comment from the project
			'delete_owned_comment_from_project' => True,		//User can delete a comment that he owns from the project
            'created_by' => 1
        ]);
        $this->command->info('Role Tester created');
    }
}
